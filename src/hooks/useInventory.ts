import { useState } from 'react';
import { InventoryItem } from '@/src/types/inventory';

export const useInventory = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);

  const addItem = (item: Omit<InventoryItem, 'id' | 'lastUpdated'>) => {
    setItems([...items, {
      ...item,
      id: crypto.randomUUID(),
      lastUpdated: new Date()
    }]);
  };

  const editItem = (id: string, updates: Partial<InventoryItem>) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, ...updates, lastUpdated: new Date() } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return { items, addItem, editItem, deleteItem };
};