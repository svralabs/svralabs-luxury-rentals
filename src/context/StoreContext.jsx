import React, { createContext, useContext, useState, useEffect } from 'react';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('svra_store_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem('svra_store_items', JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (item) => {
    setItems((prev) => [...prev, { ...item, id: Date.now() }]);
    addNotification(`Berhasil menambahkan: ${item.title || item.name || 'Item'}`);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearItems = () => setItems([]);

  const addNotification = (msg) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, msg }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3500);
  };

  return (
    <StoreContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItems,
        activeFilter,
        setActiveFilter,
        searchQuery,
        setSearchQuery,
        notifications,
        addNotification,
      }}
    >
      {children}
      {/* Global Toast Notification Drawer */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="bg-slate-900 border border-emerald-500/50 text-white text-xs px-4 py-2.5 rounded-lg shadow-2xl flex items-center gap-2 animate-bounce pointer-events-auto"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span>{n.msg}</span>
          </div>
        ))}
      </div>
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
