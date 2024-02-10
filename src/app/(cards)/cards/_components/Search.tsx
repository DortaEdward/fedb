"use client"
import { Card } from "@/types/card"
import React, { useState } from "react"
import SearchInput from "./Input"
import { metaData } from "@/data/metadata"

type InputValue = {
  value: string
  inputValue: string
  type: string
}

export default function Search() {

  const stringValues = [
    "name",
    "traits",
    "power",
    "cost",
    "life",
    "counter_power",
  ]

  const [payload, setPayload] = useState<Card>({
    card_id: "", name: "",
    type: "", colors: [],
    cost: "", traits: [],
    attribute: "Slash", power: "",
    counter_power: "", life: "",
    rarity: "", image_url: "",
    effect: "", set_name: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setPayload(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-w-full px-6">
      <p className="text-2xl font-semibold px-2 py-4">Card Search</p>
      <form className="flex gap-2 flex-wrap">
        {
          stringValues.map((value: string, idx) => {
            return (
              <div key={value + idx}>
                <SearchInput
                  handleChange={handleChange}
                  value={payload[value]}
                  name={value}
                />
              </div>
            )
          })
        }
        <fieldset className="relative px-2 py-4 bg-white">
          <p className="absolute bg-white px-2 top-0 left-3 capitalize ">Attribute</p>
          <select name="attribute" className="border py-1 rounded" onChange={e => handleChange(e)} value={payload["attribute"]}>
            {
              metaData.attributes.map(attr => {
                return (
                  <option value={attr}>{attr}</option>
                )
              })
            }
          </select>
        </fieldset>
        <fieldset className="relative px-2 py-4 bg-white">
          <p className="absolute bg-white px-2 top-0 left-3 capitalize ">Colors</p>
          <select name="colors" className="border py-1 rounded" onChange={e => handleChange(e)} value={payload["colors"]}>
            {
              metaData.colors.map(attr => {
                return (
                  <option value={attr}>{attr}</option>
                )
              })
            }
          </select>
        </fieldset>
        <fieldset className="relative px-2 py-4 bg-white">
          <p className="absolute bg-white px-2 top-0 left-3 capitalize ">Set Name</p>
          <select name="set_name" className="border py-1 rounded" onChange={e => handleChange(e)} value={payload["set_name"]}>
            {
              metaData.set_name.map(attr => {
                return (
                  <option value={attr}>{attr}</option>
                )
              })
            }
          </select>
        </fieldset>
        <fieldset className="relative px-2 py-4 bg-white">
          <p className="absolute bg-white px-2 top-0 left-3 capitalize ">Type</p>
          <select name="type" className="border py-1 rounded" onChange={e => handleChange(e)} value={payload["type"]}>
            {
              metaData.type.map(attr => {
                return (
                  <option value={attr}>{attr}</option>
                )
              })
            }
          </select>
        </fieldset>
        <fieldset className="relative px-2 py-4 bg-white">
          <p className="absolute bg-white px-2 top-0 left-3 capitalize ">Rarity</p>
          <select name="rarity" className="border py-1 rounded" onChange={e => handleChange(e)} value={payload["rarity"]}>
            {
              metaData.rarity.map(attr => {
                return (
                  <option value={attr}>{attr}</option>
                )
              })
            }
          </select>
        </fieldset>
      </form>
      <div className="flex gap-2 px-2">
        <button className="w-24 bg-purple-500 text-white font-medium rounded py-1">Search</button>
        <button className="w-24 border font-medium rounded py-1">Reset</button>
      </div>
    </div>
  )
}