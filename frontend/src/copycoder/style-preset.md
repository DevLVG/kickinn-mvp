# KickInn – Style System (Global Design Spec)

## 🎯 Visual Identity

- Brand style: **Minimalista, moderno, essenziale**
- Vibe: **Neo-soft neuromorphism**, fluido, accessibile
- Font: **Sans-serif** (preferibilmente Inter, fallback system font)
- Bordature: **Rounded–lg / xl**, ombre soft
- Spaziature: **Generose ma responsive**, es. `px-4 py-6` come base
- Icone: `lucide-react` (uso uniforme), dimensioni coerenti `w-6 h-6`

## 🎨 Color Palette
```js
primary:      #4A7C7C    // mint teal
secondary:    #F5F9F9    // mint light
accent:       #E5F0F0    // mint dark
text-main:    #1F2D2D    // charcoal gray
```

## 🧱 Tailwind Tokens
- Container: `container mx-auto px-4`
- Section spacing: `py-20`, `mb-12`
- Buttons:
  - Primary: `bg-primary text-white px-6 py-3 rounded-lg shadow-md`
  - Outline: `border border-primary text-primary px-6 py-3 rounded-lg`

## 🖼 Hero Section Guidelines
- Altezza: `min-h-[600px]` o `h-[75vh]`
- Background: **immagine sfocata e sfumata**, `object-cover`, overlay `bg-black/50`
- Testo centrato: `text-center text-white`
- Call to Action: 3 bottoni principali ben distanziati

## 📦 Component Guidelines
- Card: `bg-white p-6 rounded-xl shadow-md`, padding interno `space-y-4`
- Icona in top: `w-10 h-10 text-primary`
- Typography: `text-2xl font-bold`, `text-gray-600` per descrizioni 