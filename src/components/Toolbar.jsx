'use client';
import {
    Bold,
    Italic,
    Strikethrough,
    List,
    ListOrdered,
    AlignJustify,
    AlignCenter
} from 'lucide-react'
import { Toggle } from './ui/toggle';

function Toolbar({ editor }) {
    if (!editor) return null


    return (
        <div className='border border-input bg-transparent rounded-md border-light-texto dark:border-dark-texto text-light-texto dark:text-dark-texto'>
            <Toggle
                size="sm"
                pressed={editor.isActive('bold')}
                onPressedChange={() => editor.chain().focus().toggleBold().run()}
                className='border-light-texto dark:border-dark-texto hover:bg-light-fondo dark:hover:bg-dark-fondo focus-visible:bg-light-fondo dark:focus-visible:bg-dark-fondo'
            >
                <Bold className='h-4 w-4' />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive('italic')}
                onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            >
                <Italic className='h-4 w-4' />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive('strike')}
                onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            >
                <Strikethrough className='h-4 w-4' />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive({ textAlign: 'justify' })}
                onPressedChange={() => editor.chain().focus().setTextAlign('justify').run()}
            >
                <AlignJustify className='h-4 w-4' />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive({ textAlign: 'center' })}
                onPressedChange={() => editor.chain().focus().setTextAlign('center').run()}
            >
                <AlignCenter className='h-4 w-4' />
            </Toggle>

        </div>
    )
}

export default Toolbar