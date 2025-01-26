import { Input } from '@/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';

interface FilterBarProps {
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: 'asc' | 'desc') => void;
}

export function FilterBar({ categories, onSearchChange, onCategoryChange, onSortChange }: FilterBarProps) {
  return (
    <div className="flex gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
      <Input
        placeholder="Search items..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="max-w-xs focus:ring-blue-500 focus:border-blue-500"
      />

      <Select onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem
              key={category}
              value={category}
              className="hover:bg-blue-50"
            >
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => onSortChange(value as 'asc' | 'desc')}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Sort by Quantity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Quantity: Low to High</SelectItem>
          <SelectItem value="desc">Quantity: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>

  );
}