import React, { useState } from "react";
import { ChevronDown, ChevronRight, Trash2 } from "lucide-react";

const statusColors = {
  RELEASED: "bg-green-100 text-green-800",
  DEVELOPMENT: "bg-blue-100 text-blue-800",
};

export default function BomItemRow({
  item,
  level = 0,
  onUpdate,
  onDelete,
  dragProvided = null, // pass provided from Draggable when present
   dragSnapshot = null, // <-- add this
}) {
  const [expanded, setExpanded] = useState(true);
  const [editingName, setEditingName] = useState(false);
  const [name, setName] = useState(item.item_name);
  const [editingQty, setEditingQty] = useState(false);
  const [qty, setQty] = useState(item.quantity);

  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  
    const rowClass = [
    "flex items-center border-b text-sm transition",
    hasChildren ? "bg-gray-50 font-semibold text-gray-900" : "font-normal text-gray-700",
    dragSnapshot && dragSnapshot.isDragging ? "bg-yellow-100 shadow-lg" : ""
  ].join(" ");

  function saveIfChanged() {
    const updates = {};
    if (name !== item.item_name) updates.item_name = name;
    if (qty !== item.quantity) updates.quantity = qty;
    if (Object.keys(updates).length > 0 && onUpdate) onUpdate(item.id, updates);
  }

  // Apply draggable props only when dragProvided is present.
  const dragProps = dragProvided
    ? {
        ref: dragProvided.innerRef,
        ...dragProvided.draggableProps,
        ...dragProvided.dragHandleProps,
      }
    : {};

  return (
    <>
      <div
        {...dragProps}
        className={rowClass}
        style={{ paddingLeft: `${level * 18}px` }}
      >
        {/* expand / collapse */}
        <div className="w-6 flex justify-center px-2">
          {hasChildren ? (
            expanded ? (
              <ChevronDown
                size={16}
                className="cursor-pointer"
                onClick={() => setExpanded(false)}
              />
            ) : (
              <ChevronRight
                size={16}
                className="cursor-pointer"
                onClick={() => setExpanded(true)}
              />
            )
          ) : (
            <div style={{ width: 16 }} />
          )}
        </div>

        {/* item name */}
        <div className="flex-1 px-2 py-2">
          {editingName ? (
            <input
              className="border px-1 py-0.5 w-full text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => {
                saveIfChanged();
                setEditingName(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveIfChanged();
                  setEditingName(false);
                }
              }}
              autoFocus
            />
          ) : (
            <span
              className="cursor-pointer"
              title="Double click to edit"
              onDoubleClick={() => setEditingName(true)}
            >
              {item.item_name}
            </span>
          )}
        </div>

        {/* status badge */}
        <div className="w-36 px-2 py-2">
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              statusColors[item.status] || "bg-gray-100 text-gray-800"
            }`}
          >
            {item.status}
          </span>
        </div>

        {/* placeholder icons column */}
        <div className="w-36 px-2 py-2 text-center text-gray-500">Files · Viz · Tasks</div>

        {/* qty */}
        <div className="w-20 px-2 py-2 text-right">
          {editingQty ? (
            <input
              type="number"
              className="border px-1 py-0.5 text-sm w-16 text-right"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              onBlur={() => {
                saveIfChanged();
                setEditingQty(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveIfChanged();
                  setEditingQty(false);
                }
              }}
              autoFocus
            />
          ) : (
            <span onDoubleClick={() => setEditingQty(true)} className="cursor-pointer">
              {item.quantity}
            </span>
          )}
        </div>

        {/* creator */}
        <div className="w-20 px-2 py-2 text-center">{item.creator}</div>

        {/* delete */}
        <div className="w-12 px-2 py-2 text-center">
          <Trash2
            size={16}
            className="text-red-500 cursor-pointer"
            onClick={() => onDelete && onDelete(item.id)}
            title="Delete item"
          />
        </div>
      </div>

      {/* children */}
      {expanded &&
        hasChildren &&
        item.children.map((child) => (
          <BomItemRow
            key={child.id}
            item={child}
            level={level + 1}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
    </>
  );
}
