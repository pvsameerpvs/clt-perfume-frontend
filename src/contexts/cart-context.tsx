"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { Product } from "@/lib/products"

interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  
  // Load from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cle_cart")
      if (saved) {
        setItems(JSON.parse(saved))
      }
    } catch (e) {
      console.error("Failed to load cart", e)
    }
  }, [])

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("cle_cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product, quantity: number) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setItems(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ))
  }

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
