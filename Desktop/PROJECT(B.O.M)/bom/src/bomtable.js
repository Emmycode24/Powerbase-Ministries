import React, { useEffect, useState } from "react";
import bomData from "./bom_item.json";
import BomList from "./bomlist.js";
import { Plus, Save } from "lucide-react";

export default function BomTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(bomData);
  }, []);

  // recursive update
  const updateItem = (id, updates, items = data) => {
    return items.map((it) => {
      if (it.id === id) return { ...it, ...updates };
      if (it.children) return { ...it, children: updateItem(id, updates, it.children) };
      return it;
    });
  };

  const deleteItem = (id, items = data) => {
    return items
      .filter((it) => it.id !== id)
      .map((it) => (it.children ? { ...it, children: deleteItem(id, it.children) } : it));
  };

  const handleUpdate = (id, updates) => {
    setData((prev) => updateItem(id, updates, prev));
  };

  const handleDelete = (id) => {
    setData((prev) => deleteItem(id, prev));
  };

  const handleAddRoot = () => {
    const newItem = {
      id: Date.now().toString(),
      item_number: "NEW-ITEM",
      item_name: "New Item",
      status: "DEVELOPMENT",
      quantity: 1,
      creator: "EC",
      children: [],
    };
    setData((prev) => [...prev, newItem]);
  };

  return (
    <div className="border rounded-lg shadow-sm bg-white">
      {/* header */}
      <div className="flex justify-between items-center p-4 border-b bg-gray-50">
        <h2 className="text-lg font-semibold">Bill of Materials</h2>
        <div className="flex gap-2">
          <button
            onClick={handleAddRoot}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-500 text-white rounded"
          >
            <Plus size={14} /> Add End Item
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-sm bg-green-500 text-white rounded">
            <Save size={14} /> Save as new eBOM version
          </button>
        </div>
      </div>

      {/* table header */}
      <div className="flex font-semibold bg-gray-100 border-b text-sm">
        <div className="px-2 py-2 w-6"></div>
        <div className="px-2 py-2 flex-1">Item Name</div>
        <div className="px-2 py-2 w-36">Status</div>
        <div className="px-2 py-2 w-36">Files / Viz / Tasks</div>
        <div className="px-2 py-2 w-20 text-right">Qty</div>
        <div className="px-2 py-2 w-20 text-center">Creator</div>
        <div className="px-2 py-2 w-12 text-center">Del</div>
      </div>

      {/* BOM List */}
      <BomList
        initialItems={data}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        setItems={setData}
      />
    </div>
  );
}