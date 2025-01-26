// import * as Dialog from '@radix-ui/react-dialog';
// import { X } from 'lucide-react';
// import { EditItemForm } from './EditItemForm'; // Existing form component
// import { InventoryItem } from '@/src/types/inventory';

// interface EditItemDialogProps {
//  item: InventoryItem;
//  open: boolean;
//  onOpenChange: (open: boolean) => void;
//  onSubmit: (data: Partial<InventoryItem>) => void;
// }

// export function EditItemDialog({ 
//  item, 
//  open, 
//  onOpenChange, 
//  onSubmit 
// }: EditItemDialogProps) {
//  const handleSubmit = (data: Partial<InventoryItem>) => {
//    onSubmit(data);
//    onOpenChange(false);
//  };

//  return (
//    <Dialog.Root open={open} onOpenChange={onOpenChange}>
//      <Dialog.Portal>
//        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
//        <Dialog.Content 
//          className="fixed left-1/2 top-1/2 z-50 w-full max-w-md 
//            -translate-x-1/2 -translate-y-1/2 
//            rounded-lg bg-white p-6 shadow-lg 
//            focus:outline-none"
//        >
//          <Dialog.Close 
//            className="absolute right-4 top-4 
//              rounded-sm opacity-70 
//              hover:opacity-100 
//              focus:outline-none 
//              focus:ring-2 
//              focus:ring-ring"
//          >
//            <X className="h-4 w-4" />
//            <span className="sr-only">Close</span>
//          </Dialog.Close>
         
//          <Dialog.Title className="text-lg font-semibold mb-4">
//            Edit Item
//          </Dialog.Title>

//          <EditItemForm 
//            item={item} 
//            onSubmit={handleSubmit}
//            onCancel={() => onOpenChange(false)} 
//          />
//        </Dialog.Content>
//      </Dialog.Portal>
//    </Dialog.Root>
//  );
// }