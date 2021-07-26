# Zed Reaction

Description of design and game features / elements.

## Index
- [General Info](#general-info)
- [World](#world)
- [Items](#items)
- [Character](#character)
- [Zed](#zed)
- [Houses](#houses)
- [UI](#ui)

## General Info
Rules described in this document will be the standard rules and are subject to change. Many rules can be changed in config file

- Player spawns in random house with no inventory and full vitals
- Houses have randomly generated inventories
- A random number Zed will spawn in random positions on the map at game start
- Player wins if they kill all Zed on map
- Player loses if they die
- Zed will attack baracades before entering Player's postion if they exist
- Each house can have 1 baracade at a time
- Each action a player takes is a turn, each turn all Zed also get an action to move or attack
- Zed will not move unless the Player makes noise that turn
- Actions that make noise are Search, Move, Dismantle, Baracade, and Attack Zed

More specific information can be found in the sections below

### World
- Map Positions
  > fixed
  - Houses
  - Yards
  - Road
- Character position
  > RNG at game start
- Zed positions
  > RNG at game start

### Items
- Food
  > Used to replenish Hunger
- Water
  > Used to replenish Thirst
- Weapons
  > Equiped to Hands, RNG damage at game start
- Bandages
  > Used to replenish Health
- Tools
  > Used to dismatle furniture
- Materials
  - Wood
    > Used with Nails to build Baracades
  - Nails
    > Used with Wood to build Baracades
- Furniture
  > Can be dismantled with tools, gives Player RNG of wood &/ nails

### Character
- Position
- Vitals
  - Health
    > Player dies when empty, damaged by zed / empty hunger / empty thirst
  - Hunger
    > Decrease over time, when empty damages health over time, replenished with Food
  - Thirst
    > Decrease over time, when empty damages health over time, replenished with Water
- Inventory
  > Starts empty
- Equipment Slots
  - Hands
    > Hold a Weapon or Tools
- Actions
  - Default
    - Search
      > Find Items RNG (Noisey)
    - Move
      > Move to an adjacent position (Noisey)
  - Unlockable
    - By Item
      - Eat (Food)
        > Replenishes Hunger
      - Drink (Water)
        > Replenishes Thirst
      - Equip (Weapon / Tool)
        > Moves an Item from Inventory to an Equipment Slot
      - Heal (Bandage)
        > Replenishes Health
      - Dismantle (Tool)
        > Dismantle Furniture (Noisey)
      - Baracade (Wood & 2 Nails)
        > Baracade current House (Noisey)
    - By Zed at current position
      - Attack Zed
        > Do Weapon or Unarmed damage to Zed (Noisey)

### Zed
- Position
  > RNG at game start, RNG moves toward Player when Player makes noise
- Health
  > RNG at game start
- Damage
  > RNG at game start

### Houses
- Position
- Inventory
  > RNG at game start
- Baracades
  > Built by Player with wood & 2 nails
  - health

## UI
- World
  - Map of Neighborhood
    > Static
  - Arrows
    > Can be clicked on to move to adjacent positions on map, disabled if no spot in that arrow's direction or Zed at current position
  - Zed
    > List of Zed at current position and health indicator text (Healthy, Injured), delisted when dead
- Character
  - Vitals
    > Displays Health, Hunger, Thrist
  - Inventory
    > List of Items, click Item to use or equip
- House
  - House Inventory
    > Items and furniture found when Player searches, can be clicked on to pick up / dismantle
  - House Zed
    > Zed in the house attacking the Player
