import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table';
import { Button } from '@/src/components/ui/button';
import { EditItemForm } from './EditItemForm';
import { DialogWrapper } from './DialogWrapper';
import { InventoryItem } from '@/src/types/inventory';
import { toast } from "@/src/hooks/use-toast"

interface InventoryTableProps {
  items: InventoryItem[];
  onEdit: (id: string, data: Partial<InventoryItem>) => Promise<void>;
  onDelete: (id: string) => void;
}

export function InventoryTable({ items, onEdit, onDelete }: InventoryTableProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const handleEditClick = (item: InventoryItem) => {
    setSelectedItem(item);
    setIsEditDialogOpen(true);
  };

  const handleEditSubmit = async (data: Partial<InventoryItem>) => {
    if (selectedItem) {
      await onEdit(selectedItem.id, data);
      setIsEditDialogOpen(false);
    }
  };

  const handleCloseDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id} className={item.quantity < 10 ? 'bg-red-50' : ''}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="text-right">{item.quantity}</TableCell>
              <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-600"
                  onClick={() => handleEditClick(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 text-white border-red-600"
                  onClick={() => {
                    onDelete(item.id);
                    toast({
                      title: "Success",
                      description: "Item deleted successfully",
                      className: "bg-green-500 text-white border-green-600"
                    });
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedItem && (
        <DialogWrapper
          isOpen={isEditDialogOpen}
          onClose={handleCloseDialog}
          title="Edit Item"
        >
          <EditItemForm
            item={selectedItem}
            onSubmit={handleEditSubmit}
            onCancel={handleCloseDialog}
          />
        </DialogWrapper>
      )}
    </>
  );
}