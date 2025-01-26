import * as Dialog from '@radix-ui/react-dialog';
//import { X } from 'lucide-react';

interface DialogWrapperProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function DialogWrapper({ isOpen, onClose, title, children }: DialogWrapperProps) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" />
                # DialogWrapper.tsx
                <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-xl border border-gray-100">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-t-lg">
                        <Dialog.Title className="text-xl font-bold text-white">
                            {title}
                        </Dialog.Title>
                    </div>

                    <div className="p-6">
                        {children}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}