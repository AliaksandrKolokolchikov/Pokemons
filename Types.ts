export type PokemonAbility = {
    ability: { name: string, url: string }
    is_hidden: boolean
    slot: number
}

type GameIndices = {
    game_index: number,
    version: { name: string, url: string }
}

export type BaseInfo = {
    name: string,
    url: string,
}

type PokemonMoves = {
    move: BaseInfo
    version_group_details: {
        level_learned_at: number,
        move_learn_method: BaseInfo
        version_group: BaseInfo
    }[]
}

type Sprites = {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny_female: string | null
    other: {
        dream_world: {
            front_default: string | null
            front_female: string | null
        }
    }
}

export type Pokemon = {
    abilities: PokemonAbility[],
    base_experience: number
    cries: { latest: string, legacy: string }
    forms: { name: string, url: string }
    game_indices: GameIndices[]
    height: number
    held_items: []
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: PokemonMoves[]
    name: string
    order: number
    past_abilities: []
    past_types: []
    species: BaseInfo
    sprites: any | Sprites
    stats: any
    weight: number

}


