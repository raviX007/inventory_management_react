import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';

export const categories = ['Electronics', 'Clothing', 'Food', 'Other'];

export function ItemFormFields({ form }: { form: any }) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem 
                    key={category} 
                    value={category}
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="quantity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantity</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                {...field} 
                onChange={e => field.onChange(Number(e.target.value))} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                step="0.01" 
                {...field} 
                onChange={e => field.onChange(Number(e.target.value))} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}