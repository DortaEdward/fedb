import Header from "@/app/_components/header";
import Image from "next/image";
import Search from "./_components/Search";
import ToggleView from "./_components/ToggleView";
import cards from "@/data/cards.json"

export default function CardViewer() {
  const cardsArr = cards.slice(0, 11)
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Search />
      <div className="w-full flex justify-end">
        <ToggleView />
      </div>
      <div className="flex flex-col gap-2 py-2 items-center overflow-y-auto bg-red-200">
        {
          cardsArr.map(card => {
            return (
              <div key={card.card_id} className="flex w-full px-8">
                <Image src={card.image_url} alt={`Image of ${card.card_id}`} width={200} height={110} />
                <div>
                  <p className="text-2xl font-bold">{card.name}</p>
                  <p>{card.card_id}</p>
                  <div className="flex gap-2">
                    <p>Cost: {card.cost}</p>
                    <p>{card.attribute}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <p>Color:</p>
                      {
                        card.color.map((color, idx) => {
                          return (
                            <p key={color}>{color}{idx < card.color.length - 1 && ","}</p>
                          )
                        })
                      }
                    </div>
                    <p className="capitalize">Card Type: {card.type}</p>
                    <p>
                      {
                        card.life && `Life: ${card.life}`
                      }
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {
                      card.counter_power
                        ? <p>Counter Power: {card.counter_power}</p>
                        : <></>
                    }
                    {
                      card.power
                        ?
                        <p>Power: {card.power}</p>
                        : <></>
                    }
                  </div>
                  <p className="max-w-3xl text-lg">Effect: {card.effect}</p>
                  <div className="flex gap-1">
                    {
                      card.traits?.map((trait, idx) => {
                        return (
                          <p key={trait}>{trait}{idx < card.traits.length - 1 && ","}</p>
                        )
                      })
                    }
                  </div>
                  <div className="flex gap-1">
                    <p>{card.set_name}</p>
                    <p>{card.rarity}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
