interface TabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabs = ['HackIreland', 'Unaite', 'Founders House']

  return (
    <div className='flex gap-2'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 relative ${
            activeTab === tab ? 'bg-white text-orange-500 z-30 mb-[-1px]' : 'bg-orange-500 text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
