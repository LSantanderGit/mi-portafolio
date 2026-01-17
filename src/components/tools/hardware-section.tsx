import hardware from "../../locales/hardware.json"
import HardwareCard from "./hardware-card"

export default function HardwareSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {hardware.map((item) => (
        <HardwareCard
          key={item.id}
          type={item.type}
          name={item.name}
          image={item.image}
          specs={item.specs}
        />
      ))}
    </div>
  )
}
