import { useState } from "react";

const initialItems = [
    { title: 'pretzels', id: 0},
    { title: 'crispy sewed', id: 1},
    { title: 'granola bar', id: 2},
];

export default function Menu() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);

    const selectedItem = items.find(item => item.id === selectedId);

    function handleItemChange(id, e) {
        setItems(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value,
                };
            } else {
                return item;
            }
        }));
    }

    return (
        <>
            <h2>Whats your travel snack.</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        <input 
                            value={item.title}
                            onChange={(e) => {handleItemChange(item.id, e)}}

                        />
                        <button onClick={() => {
                            setSelectedId(item);
                        }}>Choose</button>
                    </li>
                ))}
            </ul>
            <p>You picked <b>{selectedItem.title}</b></p>
        </>
    );
} 