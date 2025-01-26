import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from '@/src/components/ui/button';
import { Form } from '@/src/components/ui/form';
import { toast } from '@/src/hooks/use-toast';
import { ItemFormFields } from './ItemFormFields';

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  quantity: z.number().min(0, "Quantity must be positive"),
  price: z.number().min(0, "Price must be positive")
});

type FormData = z.infer<typeof formSchema>;

interface AddItemFormProps {
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
}

export function AddItemForm({ onSubmit, onCancel }: AddItemFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      quantity: 0,
      price: 0
    }
  });

  const handleSubmit = async (data: FormData) => {
    try {
      await onSubmit(data);
      form.reset();
      toast({
        title: "Success",
        duration: 2000,
        description: "Item added successfully",
        className: "bg-green-500 text-white border-green-600"
      });


      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        duration: 2000,
        description: "Failed to add item",
        className: "bg-red-500 text-white border-red-600"
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <ItemFormFields form={form} />

        <div className="flex justify-end gap-2 mt-6">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="outline">Add Item</Button>
        </div>
      </form>
    </Form>
  );
}