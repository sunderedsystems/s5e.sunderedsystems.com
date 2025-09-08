module.exports = {
  sidebar: [
    // 1. Getting Started: the absolute essentials
    {
      type: 'category',
      label: 'A New Way To Play',
      collapsible: true,
      items: [
       'play-now',
       'quickstart-interactive',
      ],
    },

    // 2. Core Engine: checks, targeting, contests
    // 3. Action & Combat Loop
    // 4. Magic & Techniques
    {
      type: 'category',
      label: 'Core Engine',
      items: [
        'creating-a-character',
        'ability-checks',
        'combat',
        'techniques',
      ],
    },

    // 5. Counters & Reactions
    {
      type: 'category',
      label: 'Counters & Reactions',
      items: [
        'counters',
      ],
    },

    // 6. Items & Magic
    {
      type: 'category',
      label: 'Items & Crafting',
      items: [
        'items-and-types',
      ],
    },

    // 7. Familiars, Pets & Summons
    {
      type: 'category',
      label: 'Familiars, Pets, and Summons',
      items: [
        'familiars',
        'pets',
        'summoned-creatures',
        'size-limits-for-familiars-pets-and-summons',
      ],
    },

    // 8. Creatures & Mythic Beings
    {
      type: 'category',
      label: 'Creatures',
      items: [
        'creatures-and-creature-tiers',
      ],
    },

    // 9. Momentum & Renown (Advanced Narrative)
    {
      type: 'category',
      label: 'Momentum & Renown',
      items: [
        'momentum',
        'renown',
      ],
    },

    // 10. Criticals & Effects
    {
      type: 'category',
      label: 'Criticals',
      items: [
        'criticals',
      ],
    },

    // 11. Sundered 5e Classes (Optional Module)
    {
      type: 'category',
      label: 'Sundered 5e Classes',
      items: [
        'barbarian',
        'bard',
        'cleric',
        'druid',
        'fighter',
        'monk',
        'paladin',
        'ranger',
        'rogue',
        'sorcerer',
        'warlock',
        'wizard',
      ],
    },

    // 12. Spell Reference
    {
      type: 'category',
      label: 'Spell List',
      items: [
        'cantrips',
        'level-1-spells',
        'level-2-spells',
        'level-3-spells',
        'level-4-spells',
        'level-5-spells',
        'level-6-spells',
        'level-7-spells',
        'level-8-spells',
        'level-9-spells',
        'wish',
      ],
    },

    // 13. Licensing & Legal (bottom section only)
    {
      type: 'category',
      label: 'Licensing & Legal',
      items: [
        'SCL',
        's5e-third-party-content',
        '5.1cc-srd',
        'orc',
        'faq',
      ],
    },
  ],

  // Custom sidebar for licensing/legal docs only (fixed paths)
  licensingSidebar: [
    'SCL',
    's5e-third-party-content',
    '5.1cc-srd',
    'orc',
    'faq',
  ],
};
