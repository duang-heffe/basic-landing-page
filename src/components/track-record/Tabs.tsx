interface TabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabs = ['HackIreland', 'Unaite', 'Founders House']

  return (
    <div className='flex gap-2 max-[400px]:gap-1 flex-nowrap w-full min-w-0'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 relative text-base font-bold whitespace-nowrap flex-shrink-0 max-[400px]:text-sm max-[400px]:px-3 max-[400px]:py-1.5 ${
            activeTab === tab
              ? 'bg-white text-[var(--color-orange)] z-30 mb-[-5px]'
              : 'bg-[var(--color-orange)] text-white mb-[-4px]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
