# Page Load
1. Generate House Inventories
2. Generate Zed
    - Quantity
    - Positions
3. Generate Player
    - Position
4. Render UI
5. Listen for click events
    - [Arrows](#arrow-click-events)
    - [Zed](#zed-click-events)
    - [House Items](#house-item-click-events)
    - [Inventory Items](#inventory-item-click-events)
    - [Search](#search-click-event)
    - [Barricade](#barricade-click-event)

## Arrow Click Events
1. Update Player Position
2. [Zed Attack](#zed-attack)
3. [Zed Move](#zed-move)
4. Update UI

## Zed Click Events
1. Player attack Zed
2. Check for Player win
    - if win true, load win screen
3. [Zed Attack](#zed-attack)
4. [Zed Move](#zed-move)
5. Update UI

## House Item Click Events
1. Check if furniture
  - if true, is Player holding tools?
    - if true,
        1. [Break Furniture](#break-furniture)
        2. [Zed Attack](#zed-attack)
        3. [Zed Move](#zed-move)
  - else,
    1. [Transfer Item](#transfer-item)
    2. [Zed Attack](#zed-attack)
2. Update UI

## Inventory Item Click Events
1. Check item type
    - if tools,
      1. Add equipped item to Player inventory
      2. Remove Equipped item from Player equipped
      3. Add tools to Player equipped
      4. Remove tools from Player inventory
    - if weapon,
      1. Add equipped item to Player inventory
      2. Remove Equipped item from Player equipped
      3. Add weapon to Player equipped
      4. Remove weapon from Player inventory
    - if bandage,
      1. Heal Player
      2. Remove bandage from Player inventory
    - if food,
      1. Replenish Player hunger
      2. Remove food from Player inventory
    - if water,
      1. Replenish Player thirst
      2. Remove water from Player inventory
2. [Zed Attack](#zed-attack)
3. Update UI

## Search Click Event
1. Add house inventory items to house found items
2. [Zed Attack](#zed-attack)
3. [Zed Move](#zed-move)
4. Update UI

## Barricade Click Event
1. Check Player has materials
    - if true, does Player have tools equipped?
      - if true,
        1. Set house barricade to true
        2. Remove materials from Player inventory
        3. [Zed Attack](#zed-attack)
        4. [Zed Move](#zed-move)
        5. Update UI

### Zed Attack
1. Zed attack Player
2. Check Player Death
    - if true, load lose screen
3. Return

### Zed Move
1. Zed attack Barricade
2. Zed move
3. Return

### Break Furniture
1. Generate materials
2. Remove furniture item fom house
3. Add materials to house
4. Return

### Transfer Item
1. Add item to Player inventory
2. Delete item from house
3. Return
