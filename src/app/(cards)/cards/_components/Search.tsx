"use client"
import { Card } from "@/types/card"
import React, { useState } from "react"
import SearchInput from "./Input"

export default function Search() {
  const values = [
    {
      value: "name",
      inputType: "input",
      type: "string"
    },
    {
      value: "type",
      inputType: "select",
      type: "string"
    },
    {
      value: "color",
      inputType: "select",
      type: "string"
    },
    {
      value: "traits",
      inputType: "input",
      type: "string"
    },
    {
      value: "cost",
      inputType: "input",
      type: "string"
    },
    {
      value: "attribute",
      inputType: "select",
      type: "string"
    },
    {
      value: "power",
      inputType: "input",
      type: "string"

    },
    {
      value: "counter_power",
      inputType: "select",
      type: "string"
    },
    {
      value: "life",
      inputType: "select",
      type: "string"
    },
    {
      value: "rarity",
      inputType: "select",
      type: "string"
    },
    {
      value: "set_name",
      inputType: "select",
      type: "string"
    },
  ]
  const [payload, setPayload] = useState<Card>({
    card_id: "",
    name: "",
    type: "",
    color: [],
    cost: "",
    traits: [],
    attribute: "",
    power: "",
    counter_power: "",
    life: "",
    rarity: "",
    image_url: "",
    effect: "",
    set_name: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-w-full">
      <p>Card Search</p>
      <form>
        {
          values.map((value: any, idx) => {
            return (
              <div key={value + idx}>
                <SearchInput
                  handleChange={handleChange}
                  value={payload[`${value.value}`]}
                  name={value.value}
                />
              </div>
            )
          })
        }
      </form>
    </div>
  )
}





/*

  const [name, setName] = useState<"" | undefined>()
  const [cost, setCost] = useState<"" | undefined>()
  const [cardAttribute, setCardAttribute] = useState<"" | undefined>()
  const [color, setColor] = useState<"" | undefined>()
  const [cardType, setCardType] = useState<"" | undefined>()
  const [power, setPower] = useState<"" | undefined>()
  const [counterPower, setCounterPower] = useState<"" | undefined>()
  const [effect, setEffect] = useState<"" | undefined>()
  const [trait, setTrait] = useState<"" | undefined>()
  const [cardSet, setCardSet] = useState<"" | undefined>()
  const [rarity, setRarity] = useState<"" | undefined>()
*/