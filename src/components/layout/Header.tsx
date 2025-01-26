import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md">
      <div className="flex h-16 items-center px-6">
        <h1 className="text-xl font-bold text-white">Inventory Manager</h1>
        <div className="ml-auto">
          <Button variant="outline" className="bg-white hover:bg-gray-100 text-blue-800">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
