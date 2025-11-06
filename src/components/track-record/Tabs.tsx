interface TabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
<<<<<<< HEAD
  const tabs = ['HackIreland', 'Unaite', 'Founders House']

  return (
    <div className='flex gap-2 max-[400px]:gap-1 flex-nowrap w-full min-w-0'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 relative text-base whitespace-nowrap flex-shrink-0 max-[400px]:text-sm max-[400px]:px-3 max-[400px]:py-1.5 ${
            activeTab === tab ? 'bg-white text-orange-500 z-30 mb-[-5px]' : 'bg-orange-500 text-white mb-[-4px]'
          }`}
        >
          {tab}
=======
  const tabs = [
    { id: 'HackIreland', label: 'Ireland' },
    { id: 'HackFrance', label: 'France' },
    { id: 'HackSweden', label: 'Sweden' }
  ]

  return (
    <div className='flex gap-4'>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'bg-orange-500 text-white'
              : 'bg-gray-700 text-white/80 hover:bg-gray-600'
          }`}
        >
          {tab.label}
>>>>>>> cdbed7b (Save current work before reconnecting to remote)
        </button>
      ))}
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> cdbed7b (Save current work before reconnecting to remote)
