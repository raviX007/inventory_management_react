import { useState, useMemo } from 'react';
import { Layout } from '@/src/components/layout/Layout';
import { InventoryTable } from '@/src/components/inventory/InventoryTable';
import { FilterBar } from '@/src/components/inventory/FilterBar';
import { AddItemForm } from '@/src/components/inventory/AddItemForm';
import { useInventory } from '@/src/hooks/useInventory';
import { Button } from '@/src/components/ui/button';
import { Toaster } from '@/src/components/ui/toaster';
import { DialogWrapper } from './components/inventory/DialogWrapper';
import { InventoryItem } from '@/src/types/inventory';

const categories = ['Electronics', 'Clothing', 'Food', 'Other'];

function App() {
  const { items, addItem, editItem, deleteItem } = useInventory();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return items
      .filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (categoryFilter === "all" || categoryFilter === "" ? true : item.category === categoryFilter)
      )
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.quantity - b.quantity;
        }
        return b.quantity - a.quantity;
      });
  }, [items, search, categoryFilter, sortOrder]);

  const handleAddItem = async (data: Partial<InventoryItem>) => {
    await addItem(data);
    setIsAddDialogOpen(false);
  };

  const handleEditItem = async (id: string, data: Partial<InventoryItem>) => {
    await editItem(id, data);
  };

  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <Button
            onClick={() => setIsAddDialogOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg hover:shadow-blue-200 transition-all border border-blue-700"
          >
            Add New Item
          </Button>
        </div>

        <FilterBar
          categories={categories}
          onSearchChange={setSearch}
          onCategoryChange={setCategoryFilter}
          onSortChange={setSortOrder}
        />

        <InventoryTable
          items={filteredItems}
          onEdit={handleEditItem}
          onDelete={deleteItem}
        />

        <DialogWrapper
          isOpen={isAddDialogOpen}
          onClose={() => setIsAddDialogOpen(false)}
          title="Add New Item"
        >
          <AddItemForm
            onSubmit={handleAddItem}
            onCancel={() => setIsAddDialogOpen(false)}
          />
        </DialogWrapper>
      </div>

      <Toaster />
    </Layout>
  );
}

export default App;