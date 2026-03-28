

# Developer Handoff Document — crp.tm Clothing Store

## 1. File Structure & Routing

### Project Tree (key files only)
```text
src/
├── assets/                    # All product/hero images (JPG)
│   ├── hero-campaign.jpg
│   ├── product-front.jpg, product-back.jpg
│   ├── product-flared-denim.jpg, product-flared-black.jpg
│   ├── product-henley-black.jpg, product-henley-grey.jpg
│   ├── product-henley-blue.jpg, product-henley-blue2.jpg
│   ├── product-wide-pants.jpg
│   ├── carousel-model1.jpg, carousel-model2.jpg, carousel-look.jpg
│   └── carousel-front.jpg, carousel-back.jpg
├── components/
│   ├── AnnouncementBar.tsx    # Top banner with countdown timer
│   ├── Navbar.tsx             # Sticky nav: hamburger, logo, cart button
│   ├── HeroSection.tsx        # Full-screen hero with CTA
│   ├── NewArrivals.tsx        # Product grid (reads from data/products.ts)
│   ├── EmailSignup.tsx        # Email subscribe section
│   ├── ProductPage.tsx        # Single product detail view
│   ├── CartModal.tsx          # Slide-in cart drawer
│   └── ui/                    # shadcn/ui primitives (don't touch)
├── data/
│   └── products.ts            # ALL product data lives here
├── pages/
│   ├── Index.tsx              # Main page (home + product views)
│   └── NotFound.tsx           # 404 page
├── index.css                  # Tailwind + CSS variables (theme)
├── App.tsx                    # React Router setup
└── main.tsx                   # Entry point
```

### Routing: Conditional Rendering, NOT React Router pages

This site does **NOT** use separate routes for products. React Router only has two routes:
- `/` → `Index.tsx` (the entire app)
- `*` → `NotFound.tsx`

Inside `Index.tsx`, a `useState` variable called `page` switches between `"home"` and `"product"` views using conditional rendering with `AnimatePresence`. This means there are no `/product/vintage-flared-denim` URLs — it's all one page with state-driven views.

### How to add a new page (e.g., About Us)
1. Create `src/pages/About.tsx`
2. In `src/App.tsx`, add: `<Route path="/about" element={<About />} />` above the catch-all route

---

## 2. State Management: Plain React useState (No Context, No Zustand)

Everything lives in `src/pages/Index.tsx` as local state:

```text
Index.tsx (parent)
├── page: "home" | "product"         — which view is showing
├── selectedProductId: string | null  — which product detail to show
├── cartOpen: boolean                 — is cart drawer visible
├── cartItems: CartItem[]             — array of {name, size, price}
```

**How data flows:**
- `Navbar` receives `cartCount` and `onCartClick` as props
- `NewArrivals` receives `onProductClick(productId)` — sets `selectedProductId` and switches to product view
- `ProductPage` receives the full `product` object + `onAddToCart(size)` callback
- `CartModal` receives `isOpen`, `items[]`, `onClose`, and `onRemove(index)`

There is no global state. Everything is prop-drilled from `Index.tsx`.

---

## 3. Component Hierarchy

```text
Index.tsx
├── AnnouncementBar          (self-contained countdown timer)
├── Navbar                   (receives: cartCount, onCartClick, onHomeClick)
├── [if page === "home"]
│   ├── HeroSection          (receives: onShopClick)
│   ├── NewArrivals          (receives: onProductClick)
│   └── EmailSignup          (self-contained)
├── [if page === "product"]
│   └── ProductPage          (receives: product, onAddToCart)
└── CartModal                (receives: isOpen, items, onClose, onRemove)
```

**Key interactions:**
- Clicking a product card in `NewArrivals` → calls `goToProduct(id)` → sets state in Index → renders `ProductPage`
- "Add To Cart" in `ProductPage` → calls `addToCart(size)` → pushes to `cartItems` array in Index
- Cart icon in `Navbar` → sets `cartOpen = true` → shows `CartModal`

---

## 4. Product Data Structure

All products live in **`src/data/products.ts`**. Here is the exact TypeScript interface and how to add a new product:

```typescript
// The interface
export interface Product {
  id: string;                              // URL-safe unique ID
  name: string;                            // Display name
  price: number;                           // Numeric price (e.g., 1299)
  priceLabel: string;                      // Formatted price (e.g., "₹1299")
  sizes: string[];                         // Available sizes
  images: { src: string; alt: string }[];  // Product page carousel images
  thumbnail: string;                       // Grid card front image
  thumbnailAlt: string;                    // Grid card hover image
  measurements: {
    length: string;
    sizes: { label: string; details: string }[];
  };
}
```

**To add a new product:**
1. Drop your image(s) into `src/assets/`
2. At the top of `src/data/products.ts`, add the import:
   ```typescript
   import newProduct from "@/assets/new-product.jpg";
   ```
3. Add a new object to the `products` array:
   ```typescript
   {
     id: "my-new-product",
     name: "My New Product",
     price: 1299,
     priceLabel: "₹1299",
     sizes: ["28", "30", "32", "34"],
     images: [
       { src: newProduct, alt: "Front" },
     ],
     thumbnail: newProduct,
     thumbnailAlt: newProduct,  // same image if you only have one
     measurements: {
       length: "43 across all sizes",
       sizes: [
         { label: "Size 28", details: "Thigh 10.5 | Leg Opening 18" },
         { label: "Size 30", details: "Thigh 11.0 | Leg Opening 18.5" },
         { label: "Size 32", details: "Thigh 11.5 | Leg Opening 19" },
         { label: "Size 34", details: "Thigh 12.5 | Leg Opening 20" },
       ],
     },
   },
   ```

That's it. The grid and product page auto-render from this array.

---

## 5. Styling Rules

### Tech stack
- **Tailwind CSS 3** with `tailwindcss-animate` plugin
- **shadcn/ui** components in `src/components/ui/` (pre-built, don't modify)
- **Framer Motion** for all animations
- **No dark mode toggle** — the site uses a light base theme with black/white contrast

### Theme (CSS variables in `src/index.css`)
The entire color system is monochrome HSL variables:
- `--background: 0 0% 100%` (white)
- `--foreground: 0 0% 0%` (black)
- `--muted-foreground: 0 0% 40%` (grey text)
- `--border: 0 0% 85%` (light grey borders)
- `--secondary: 0 0% 96%` (near-white backgrounds)
- `--radius: 0rem` (sharp corners everywhere — no rounded corners)

### Design patterns used throughout
- **Font:** `'Helvetica Neue', Helvetica, Arial, sans-serif` (set in `index.css`)
- **Text:** Always `uppercase tracking-widest font-bold` for headings/labels
- **Buttons:** `bg-foreground text-background` (black button, white text) with `hover:opacity-90`
- **Navbar:** Hardcoded `bg-black/95 text-white` with `backdrop-blur-sm` (always dark regardless of theme)
- **No scrollbars:** Hidden globally via CSS
- **Animations:** All use Framer Motion — `initial/animate/exit` pattern with `AnimatePresence`
- **Product grid:** `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6`
- **Image hover swap:** Two stacked `<img>` with `opacity-0/100` toggled via `group-hover`

### Key Tailwind classes to maintain consistency
| Element | Classes |
|---------|---------|
| Section heading | `text-xl font-bold uppercase tracking-widest` |
| Body text | `text-sm text-muted-foreground` |
| CTA button | `bg-foreground text-background py-4 font-bold uppercase tracking-widest text-sm` |
| Card badge | `bg-foreground text-background text-xs font-bold px-2 py-1` |
| Input field | `bg-transparent border border-muted-foreground/40 px-4 py-3 text-sm` |

---

## 6. Local Setup Instructions

```bash
# Clone the repo
git clone https://github.com/opphantom01/smooth-interface-polish.git
cd smooth-interface-polish

# Install dependencies (use npm, bun, or yarn)
npm install

# Start dev server
npm run dev
# Opens at http://localhost:8080

# Build for production
npm run build
```

**Requirements:** Node.js 18+, npm or bun.

### Key dependencies your dev should know
| Package | Purpose |
|---------|---------|
| `react-router-dom` | URL routing (only / and 404) |
| `framer-motion` | All animations and page transitions |
| `@tanstack/react-query` | Data fetching (installed but not actively used yet) |
| `tailwindcss` + `tailwindcss-animate` | Styling |
| `shadcn/ui` components | Pre-built UI primitives in `src/components/ui/` |

