import { useState } from "react";

// ── FOOD LIBRARY ──────────────────────────────────────────────────────────────
const FOODS = {
  "Proteins": [
    { id: "f1",  name: "Eggs (2 large)",           emoji: "🥚", cal: 140, protein: 12, carbs: 1,  fat: 10 },
    { id: "f2",  name: "Canned Tuna (5 oz)",        emoji: "🐟", cal: 130, protein: 28, carbs: 0,  fat: 1  },
    { id: "f3",  name: "Grilled Chicken Breast (4 oz)", emoji: "🍗", cal: 185, protein: 35, carbs: 0,  fat: 4  },
    { id: "f4",  name: "Chicken Thigh (5 oz)",      emoji: "🍗", cal: 230, protein: 28, carbs: 0,  fat: 13 },
    { id: "f5",  name: "Ground Turkey (4 oz)",      emoji: "🦃", cal: 170, protein: 22, carbs: 0,  fat: 9  },
    { id: "f6",  name: "Salmon Fillet (5 oz)",      emoji: "🐟", cal: 280, protein: 34, carbs: 0,  fat: 16 },
    { id: "f7",  name: "Shrimp (5 oz)",             emoji: "🍤", cal: 120, protein: 23, carbs: 1,  fat: 2  },
    { id: "f8",  name: "Hard Boiled Egg (1)",       emoji: "🥚", cal: 70,  protein: 6,  carbs: 0,  fat: 5  },
    { id: "f9",  name: "Protein Powder (1 scoop)",  emoji: "💪", cal: 120, protein: 24, carbs: 3,  fat: 1  },
    { id: "f10", name: "Lentils (½ cup cooked)",    emoji: "🫘", cal: 115, protein: 9,  carbs: 20, fat: 0  },
    { id: "f11", name: "Black Beans (¼ cup)",       emoji: "🫘", cal: 55,  protein: 4,  carbs: 10, fat: 0  },
  ],
  "Dairy": [
    { id: "d1",  name: "Cheddar Cheese (1 oz)",     emoji: "🧀", cal: 110, protein: 7,  carbs: 0,  fat: 9  },
    { id: "d2",  name: "Feta Cheese (1 oz)",        emoji: "🧀", cal: 75,  protein: 4,  carbs: 1,  fat: 6  },
    { id: "d3",  name: "Cottage Cheese (¾ cup)",    emoji: "🫙", cal: 140, protein: 18, carbs: 6,  fat: 3  },
    { id: "d4",  name: "Greek Yogurt (1 cup)",      emoji: "🫙", cal: 150, protein: 17, carbs: 9,  fat: 4  },
    { id: "d5",  name: "Greek Yogurt (¾ cup)",      emoji: "🫙", cal: 115, protein: 13, carbs: 7,  fat: 3  },
    { id: "d6",  name: "Almond Milk (1 cup)",       emoji: "🥛", cal: 30,  protein: 1,  carbs: 1,  fat: 3  },
    { id: "d7",  name: "Light Coconut Milk (½ cup)",emoji: "🥥", cal: 90,  protein: 1,  carbs: 3,  fat: 9  },
    { id: "d8",  name: "Light Mayo (1 tbsp)",       emoji: "🥄", cal: 35,  protein: 0,  carbs: 1,  fat: 4  },
  ],
  "Fruits": [
    { id: "fr1", name: "Apple (medium)",            emoji: "🍎", cal: 95,  protein: 0,  carbs: 25, fat: 0  },
    { id: "fr2", name: "Apple (small)",             emoji: "🍎", cal: 65,  protein: 0,  carbs: 17, fat: 0  },
    { id: "fr3", name: "Banana (½)",               emoji: "🍌", cal: 50,  protein: 1,  carbs: 13, fat: 0  },
    { id: "fr4", name: "Blueberries (½ cup)",       emoji: "🫐", cal: 40,  protein: 1,  carbs: 11, fat: 0  },
    { id: "fr5", name: "Strawberries (½ cup)",      emoji: "🍓", cal: 25,  protein: 0,  carbs: 6,  fat: 0  },
    { id: "fr6", name: "Mixed Berries (½ cup frz)", emoji: "🍓", cal: 40,  protein: 1,  carbs: 10, fat: 0  },
    { id: "fr7", name: "Mixed Fruit (½ cup)",       emoji: "🍑", cal: 50,  protein: 1,  carbs: 13, fat: 0  },
  ],
  "Veggies": [
    { id: "v1",  name: "Spinach (1 cup)",              emoji: "🥬", cal: 7,   protein: 1,  carbs: 1,  fat: 0  },
    { id: "v2",  name: "Mixed Greens (1 cup)",         emoji: "🥗", cal: 10,  protein: 1,  carbs: 2,  fat: 0  },
    { id: "v3",  name: "Cucumber (½, sliced)",         emoji: "🥒", cal: 15,  protein: 1,  carbs: 3,  fat: 0  },
    { id: "v4",  name: "Cherry Tomatoes (½ cup)",      emoji: "🍅", cal: 20,  protein: 1,  carbs: 4,  fat: 0  },
    { id: "v5",  name: "Bell Pepper (½ cup)",          emoji: "🫑", cal: 20,  protein: 1,  carbs: 5,  fat: 0  },
    { id: "v6",  name: "Broccoli (2 cups)",            emoji: "🥦", cal: 60,  protein: 5,  carbs: 12, fat: 0  },
    { id: "v7",  name: "Asparagus (1 cup)",            emoji: "🌿", cal: 25,  protein: 3,  carbs: 5,  fat: 0  },
    { id: "v8",  name: "Cauliflower Rice (2 cups)",    emoji: "🥦", cal: 50,  protein: 4,  carbs: 10, fat: 0  },
    { id: "v9",  name: "Stir-Fry Veggies (1 cup)",    emoji: "🥦", cal: 35,  protein: 2,  carbs: 7,  fat: 0  },
    { id: "v10", name: "Avocado (¼)",                  emoji: "🥑", cal: 80,  protein: 1,  carbs: 4,  fat: 7  },
    { id: "v11", name: "Cauliflower (1 cup)",          emoji: "🥦", cal: 25,  protein: 2,  carbs: 5,  fat: 0  },
    { id: "v12", name: "Zucchini (1 cup sliced)",      emoji: "🥒", cal: 20,  protein: 1,  carbs: 4,  fat: 0  },
    { id: "v13", name: "Mushrooms (1 cup)",            emoji: "🍄", cal: 15,  protein: 2,  carbs: 2,  fat: 0  },
    { id: "v14", name: "Brussels Sprouts (1 cup)",     emoji: "🥦", cal: 38,  protein: 3,  carbs: 8,  fat: 0  },
    { id: "v15", name: "Butternut Squash (½ cup)",     emoji: "🎃", cal: 40,  protein: 1,  carbs: 11, fat: 0  },
    { id: "v16", name: "Acorn Squash (½ cup)",         emoji: "🎃", cal: 45,  protein: 1,  carbs: 12, fat: 0  },
    { id: "v17", name: "Spaghetti Squash (1 cup)",     emoji: "🎃", cal: 42,  protein: 1,  carbs: 10, fat: 0  },
    { id: "v18", name: "Yellow Squash (1 cup)",        emoji: "🌽", cal: 18,  protein: 1,  carbs: 4,  fat: 0  },
  ],
  "Carbs & Grains": [
    { id: "c1",  name: "Rolled Oats (½ cup)",       emoji: "🥣", cal: 150, protein: 5,  carbs: 27, fat: 3  , gluten: true },
    { id: "c2",  name: "Brown Rice (½ cup cooked)", emoji: "🍚", cal: 110, protein: 2,  carbs: 23, fat: 1  },
    { id: "c3",  name: "Triscuits (8 crackers)",    emoji: "🍘", cal: 130, protein: 3,  carbs: 21, fat: 5  , gluten: true },
    { id: "c4",  name: "Whole Wheat Tortilla (1)",  emoji: "🫓", cal: 130, protein: 4,  carbs: 24, fat: 3  , gluten: true },
  ],
  "Pantry": [
    { id: "p1",  name: "Peanut Butter (2 tbsp)",    emoji: "🥜", cal: 190, protein: 7,  carbs: 7,  fat: 16 },
    { id: "p2",  name: "Peanut Butter (1 tbsp)",    emoji: "🥜", cal: 95,  protein: 4,  carbs: 3,  fat: 8  },
    { id: "p3",  name: "Jelly (1 tsp)",             emoji: "🍇", cal: 18,  protein: 0,  carbs: 5,  fat: 0  },
    { id: "p4",  name: "Hummus (¼ cup)",            emoji: "🫘", cal: 105, protein: 5,  carbs: 12, fat: 5  },
    { id: "p5",  name: "Hummus (3 tbsp)",           emoji: "🫘", cal: 75,  protein: 4,  carbs: 9,  fat: 4  },
    { id: "p6",  name: "Olive Oil (1 tbsp)",        emoji: "🫒", cal: 120, protein: 0,  carbs: 0,  fat: 14 },
    { id: "p7",  name: "Soy Sauce (1 tbsp)",        emoji: "🥄", cal: 10,  protein: 1,  carbs: 1,  fat: 0  , gluten: true },
    { id: "p8",  name: "Salsa (2 tbsp)",            emoji: "🍅", cal: 10,  protein: 0,  carbs: 2,  fat: 0  },
    { id: "p9",  name: "Cinnamon / Seasoning",      emoji: "🧂", cal: 5,   protein: 0,  carbs: 1,  fat: 0  },
  ],
};

const BASE_FOODS = Object.values(FOODS).flat();
// Foods that contain gluten (by ID) — used for warnings and filtering
const GLUTEN_IDS = new Set(["c1","c3","c4","p7"]);
function isGluten(id, customFoods=[]) {
  if (GLUTEN_IDS.has(id)) return true;
  const custom = customFoods.find(f => f.id === id);
  if (custom?.gluten === true) return true;
  return false;
}

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

// Default plan uses food IDs
const DEFAULT_PLAN = {
  Monday:    { breakfast: ["f1","d1"], lunch: ["f2","d8","d1","c3"], dinner: ["f6","v6","p6"], snack: ["d5"] },
  Tuesday:   { breakfast: ["d4","fr5"], lunch: ["c4","p4","v3","d2","v1"], dinner: ["f5","c2","f11","p8"], snack: ["f8","f8"] },
  Wednesday: { breakfast: ["f9","d6","fr3","fr6"], lunch: ["f3","v2","v4","v10","p6"], dinner: ["f4","v7","p6"], snack: ["v3","p5"] },
  Thursday:  { breakfast: ["c1","d7","fr7","p9"], lunch: ["d3","v4","v3","p9"], dinner: ["f7","v8","v9","p7"], snack: ["fr2","p2"] },
  Friday:    { breakfast: ["d3","fr4"], lunch: ["f2","d8","d1","c3"], dinner: ["f10","f10","f10","v4","v1"], snack: ["f8","f8"] },
  Saturday:  { breakfast: ["fr1","p1","p3"], lunch: ["c4","p4","v3","d2","v1"], dinner: ["f1","f1","f1","v5","v1","d2"], snack: ["d5"] },
  Sunday:    { breakfast: ["f1","d1"], lunch: ["f3","v2","v4","v10","p6"], dinner: ["f6","v6","p6"], snack: ["v3","p5"] },
};

const SHOPPING = {
  "Proteins": ["Eggs (2 dozen)","Canned tuna in water (4–5 cans)","Chicken breast (1.5 lbs)","Boneless chicken thighs (1 lb)","Lean ground turkey (1 lb)","Shrimp, frozen (1 lb)","Salmon fillets (1 lb)","Protein powder, vanilla"],
  "Dairy": ["Low-fat cottage cheese (32 oz)","Plain 2% Greek yogurt (32 oz)","Cheddar cheese (8 oz block)","Feta cheese (4 oz)","Light coconut milk (1 can)","Unsweetened almond milk (½ gallon)","Light mayonnaise"],
  "Produce": ["Apples (6)","Bananas (2)","Strawberries (1 pint)","Blueberries (1 pint)","Frozen mixed berries (1 bag)","Mixed fruit (fresh or frozen)","Cherry tomatoes (1 pint)","Cucumber (3)","Broccoli (1 large head)","Asparagus (1 bunch)","Bell peppers (3)","Spinach (1 bag, 5 oz)","Mixed greens (1 bag)","Cauliflower rice, frozen (2 bags)","Avocado (2)","Stir-fry veggie mix (1 bag frozen)","Lemon (3)","Garlic (1 head)","Onion (1)"],
  "Pantry & Grains": ["Rolled oats","Brown rice","Black beans (1 can)","Lentils (1 bag or 2 cans)","Diced tomatoes (1 can)","Triscuits (1 box)","Whole wheat tortillas (1 pack)","Hummus (1 tub, 10 oz)","Peanut butter","Jelly / fruit preserves (small jar)","Olive oil","Sesame oil (small bottle)","Low-sodium soy sauce","Everything bagel seasoning","Cinnamon","Cooking spray","Cumin"],
};

const MEAL_SLOTS = ["breakfast","lunch","dinner","snack"];
const SLOT_META = {
  breakfast: { label: "Breakfast", emoji: "🌅", accent: "#F97316" },
  lunch:     { label: "Lunch",     emoji: "☀️",  accent: "#16A34A" },
  dinner:    { label: "Dinner",    emoji: "🌙",  accent: "#2563EB" },
  snack:     { label: "Snack",     emoji: "🍎",  accent: "#9333EA" },
};

let _customFoods = [];
function getFood(id) { return [...BASE_FOODS, ..._customFoods].find(f => f.id === id); }

function sumFoods(ids) {
  return ids.reduce((acc, id) => {
    const f = getFood(id);
    if (!f) return acc;
    return { cal: acc.cal + f.cal, protein: acc.protein + f.protein, carbs: acc.carbs + f.carbs, fat: acc.fat + f.fat };
  }, { cal: 0, protein: 0, carbs: 0, fat: 0 });
}

function dayTotals(dayMeals) {
  return MEAL_SLOTS.reduce((acc, slot) => {
    const s = sumFoods(dayMeals[slot] || []);
    return { cal: acc.cal + s.cal, protein: acc.protein + s.protein, carbs: acc.carbs + s.carbs, fat: acc.fat + s.fat };
  }, { cal: 0, protein: 0, carbs: 0, fat: 0 });
}

// ── ADD CUSTOM FOOD MODAL ────────────────────────────────────────────────────
const CATEGORY_OPTIONS = ["Proteins","Dairy","Fruits","Veggies","Carbs & Grains","Pantry","My Foods"];
const EMOJI_OPTIONS = ["🥦","🍎","🍗","🥚","🧀","🫙","🥜","🍅","🥒","🌿","🍄","🎃","🫘","🥗","🍚","🥣","🍞","🫒","🧂","🥛","🍓","🫐","🍌","🐟","🍤","🦃","💪","⭐"];

function AddFoodModal({ onAdd, onClose }) {
  const [name, setName] = useState("");
  const [cat, setCat] = useState("My Foods");
  const [emoji, setEmoji] = useState("⭐");
  const [cal, setCal] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");
  const [lookup, setLookup] = useState("");
  const [looking, setLooking] = useState(false);
  const [lookupError, setLookupError] = useState("");
  const [containsGluten, setContainsGluten] = useState(false);

  const canSave = name.trim() && cal !== "" && protein !== "" && carbs !== "" && fat !== "";

  const save = () => {
    const id = "custom_" + Date.now();
    onAdd(cat, { id, name: name.trim(), emoji, cal: +cal, protein: +protein, carbs: +carbs, fat: +fat, gluten: containsGluten });
    onClose();
  };

  const lookupFood = async () => {
    if (!lookup.trim()) return;
    setLooking(true);
    setLookupError("");
    try {
      // Use USDA FoodData Central free API (no key needed for basic search)
      const searchRes = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(lookup.trim())}&pageSize=1&api_key=DEMO_KEY`
      );
      const searchData = await searchRes.json();
      const food = searchData.foods?.[0];
      if (!food) throw new Error("Not found");

      const getNutrient = (id) => {
        const n = food.foodNutrients?.find(n => n.nutrientId === id);
        return n ? Math.round(n.value) : 0;
      };

      // USDA nutrient IDs: 1008=calories, 1003=protein, 1005=carbs, 1004=fat
      const cal = getNutrient(1008);
      const protein = getNutrient(1003);
      const carbs = getNutrient(1005);
      const fat = getNutrient(1004);

      // Pick emoji based on category guess
      const desc = food.description?.toLowerCase() || "";
      let guessEmoji = "⭐";
      let guessCat = "My Foods";
      if (desc.match(/chicken|turkey|beef|pork|fish|salmon|tuna|shrimp|egg|protein/)) { guessEmoji = "🍗"; guessCat = "Proteins"; }
      else if (desc.match(/milk|cheese|yogurt|dairy|cream/)) { guessEmoji = "🧀"; guessCat = "Dairy"; }
      else if (desc.match(/apple|banana|berry|fruit|orange|grape|mango/)) { guessEmoji = "🍎"; guessCat = "Fruits"; }
      else if (desc.match(/broccoli|spinach|carrot|veggie|vegetable|pepper|mushroom|squash|zucchini/)) { guessEmoji = "🥦"; guessCat = "Veggies"; }
      else if (desc.match(/rice|oat|bread|pasta|grain|tortilla|cracker|wheat/)) { guessEmoji = "🍚"; guessCat = "Carbs & Grains"; }
      else if (desc.match(/oil|butter|sauce|dressing|spice|seasoning|nut|peanut/)) { guessEmoji = "🫒"; guessCat = "Pantry"; }

      // Clean up the name — USDA names are verbose, trim to reasonable length
      const rawName = food.description || lookup.trim();
      const cleanName = rawName.length > 40 ? rawName.slice(0, 40) + "…" : rawName;
      const servingNote = food.servingSize ? ` (${food.servingSize}${food.servingSizeUnit || "g"})` : " (100g)";

      setName(cleanName + servingNote);
      setCal(String(cal));
      setProtein(String(protein));
      setCarbs(String(carbs));
      setFat(String(fat));
      setEmoji(guessEmoji);
      setCat(guessCat);
      setLookup("");
    } catch(e) {
      setLookupError("Couldn't find that food — try a simpler name, or enter the numbers manually.");
    }
    setLooking(false);
  };

  const inputStyle = { width: "100%", padding: "9px 12px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "#fafafa" };
  const labelStyle = { fontSize: 11, fontWeight: 700, color: "#64748b", marginBottom: 4, display: "block", letterSpacing: "0.06em", textTransform: "uppercase" };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1100, background: "#000c", display: "flex", alignItems: "flex-end" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 600, margin: "0 auto", maxHeight: "90vh", overflowY: "auto", padding: "20px 16px 36px", boxShadow: "0 -8px 40px #0005" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 11, color: "#9333ea", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>Food Library</div>
            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Playfair Display', serif", color: "#1a1a2e" }}>Add a New Food</div>
          </div>
          <button onClick={onClose} style={{ background: "#f1f5f9", border: "none", borderRadius: 99, width: 32, height: 32, fontSize: 16, cursor: "pointer", color: "#555" }}>✕</button>
        </div>

        {/* Emoji picker */}
        <label style={labelStyle}>Icon</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
          {EMOJI_OPTIONS.map(e => (
            <button key={e} onClick={() => setEmoji(e)} style={{ width: 36, height: 36, borderRadius: 8, border: `2px solid ${emoji === e ? "#9333ea" : "#e2e8f0"}`, background: emoji === e ? "#9333ea12" : "#fafafa", fontSize: 18, cursor: "pointer" }}>{e}</button>
          ))}
        </div>

        <label style={labelStyle}>Food Name & Serving Size</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='e.g. "Edamame (½ cup)"' style={{ ...inputStyle, marginBottom: 14 }} />

        <label style={labelStyle}>Category</label>
        <select value={cat} onChange={e => setCat(e.target.value)} style={{ ...inputStyle, marginBottom: 14 }}>
          {CATEGORY_OPTIONS.map(o => <option key={o}>{o}</option>)}
        </select>

        <label style={labelStyle}>Nutrition (per serving)</label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 }}>
          {[["Calories","cal",cal,setCal],["Protein (g)","protein",protein,setProtein],["Carbs (g)","carbs",carbs,setCarbs],["Fat (g)","fat",fat,setFat]].map(([lbl,field,val,setter]) => (
            <div key={field}>
              <label style={{ ...labelStyle, marginBottom: 3 }}>{lbl}</label>
              <input type="number" min="0" value={val} onChange={e => setter(e.target.value)} placeholder="0" style={inputStyle} />
            </div>
          ))}
        </div>

        {/* AI Lookup */}
        <div style={{ background: "linear-gradient(135deg, #faf5ff, #f3e8ff)", border: "1.5px solid #d8b4fe", borderRadius: 12, padding: "12px 14px", marginBottom: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#9333ea", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>✨ AI Lookup — fill fields automatically</div>
          <div style={{ fontSize: 12, color: "#6b21a8", marginBottom: 8 }}>Type any food and AI will fill in the nutrition info for you</div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              value={lookup}
              onChange={e => setLookup(e.target.value)}
              onKeyDown={e => e.key === "Enter" && lookupFood()}
              placeholder='e.g. "Greek yogurt 1 cup" or "grilled salmon 5oz"'
              style={{ flex: 1, padding: "9px 12px", borderRadius: 10, border: "1.5px solid #d8b4fe", fontSize: 13, fontFamily: "inherit", outline: "none", background: "#fff" }}
            />
            <button onClick={lookupFood} disabled={looking || !lookup.trim()} style={{
              padding: "0 14px", borderRadius: 10, border: "none", flexShrink: 0,
              background: looking ? "#e9d5ff" : "linear-gradient(135deg, #9333ea, #7c3aed)",
              color: "#fff", fontSize: 13, fontWeight: 800, cursor: looking ? "default" : "pointer", fontFamily: "inherit"
            }}>{looking ? "..." : "Look up"}</button>
          </div>
          {lookupError && <div style={{ fontSize: 11, color: "#dc2626", marginTop: 6 }}>{lookupError}</div>}
        </div>

        {/* Gluten toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, padding: "10px 14px", background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: 10 }}>
          <span style={{ fontSize: 16 }}>🌾</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#92400e" }}>Contains Gluten?</div>
            <div style={{ fontSize: 10, color: "#a16207" }}>Flag this food so it shows the gluten warning</div>
          </div>
          <button onClick={() => setContainsGluten(g => !g)} style={{
            width: 44, height: 24, borderRadius: 99, border: "none", cursor: "pointer",
            background: containsGluten ? "#d97706" : "#e2e8f0", position: "relative", transition: "background 0.2s"
          }}>
            <span style={{ position: "absolute", top: 2, left: containsGluten ? 22 : 2, width: 20, height: 20, borderRadius: 99, background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 3px #0003" }} />
          </button>
        </div>

        <button onClick={save} disabled={!canSave} style={{
          width: "100%", padding: "13px", borderRadius: 12,
          background: canSave ? "linear-gradient(135deg, #9333ea, #7c3aed)" : "#e2e8f0",
          color: canSave ? "#fff" : "#aaa", border: "none", fontSize: 14, fontWeight: 800,
          cursor: canSave ? "pointer" : "default", fontFamily: "inherit"
        }}>Add to Library</button>
      </div>
    </div>
  );
}

// ── FOOD PICKER MODAL ─────────────────────────────────────────────────────────
function FoodPicker({ slot, selectedIds, customFoods, onDone, onAddCustom, onClose }) {
  const { label, accent } = SLOT_META[slot];
  const [picked, setPicked] = useState([...selectedIds]);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [gfOnly, setGfOnly] = useState(false);

  const totals = sumFoods(picked);
  const customFoodsList = Object.values(customFoods).flat();

  // Merge custom foods into base categories without overwriting existing items
  const allFoodsWithCustom = Object.entries({ ...FOODS }).reduce((acc, [cat, items]) => {
    acc[cat] = customFoods[cat] ? [...items, ...customFoods[cat]] : items;
    return acc;
  }, {});
  // Add any custom-only categories (e.g. "My Foods") not in base FOODS
  Object.entries(customFoods).forEach(([cat, items]) => {
    if (!allFoodsWithCustom[cat]) allFoodsWithCustom[cat] = items;
  });

  const filtered = Object.entries(allFoodsWithCustom).map(([cat, items]) => ({
    cat,
    items: items.filter(f => {
      const matchSearch = !search.trim() || f.name.toLowerCase().includes(search.toLowerCase());
      const matchGF = !gfOnly || !isGluten(f.id, customFoodsList);
      return matchSearch && matchGF;
    })
  })).filter(g => g.items.length > 0);

  return (
    <>
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "#000b", display: "flex", alignItems: "flex-end" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#f8fafc", borderRadius: "20px 20px 0 0", width: "100%",
        maxWidth: 600, margin: "0 auto", maxHeight: "88vh",
        display: "flex", flexDirection: "column",
        boxShadow: "0 -8px 40px #0004"
      }}>
        {/* Modal header */}
        <div style={{ padding: "18px 16px 12px", background: "#fff", borderRadius: "20px 20px 0 0", borderBottom: "1px solid #e2e8f0", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 11, color: accent, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>Build your {label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Playfair Display', serif", color: "#1a1a2e" }}>Select foods to add</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button onClick={() => setShowAdd(true)} style={{ background: "#9333ea15", border: "1.5px solid #9333ea40", borderRadius: 8, padding: "5px 10px", fontSize: 11, fontWeight: 700, color: "#9333ea", cursor: "pointer", fontFamily: "inherit" }}>+ New Food</button>
              <button onClick={onClose} style={{ background: "#f1f5f9", border: "none", borderRadius: 99, width: 32, height: 32, fontSize: 16, cursor: "pointer", color: "#555" }}>✕</button>
            </div>
          </div>

          {/* Live totals bar */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            <span style={{ background: accent + "18", color: accent, borderRadius: 8, padding: "3px 10px", fontSize: 12, fontWeight: 800 }}>{totals.cal} cal</span>
            <span style={{ background: "#3b82f618", color: "#2563eb", borderRadius: 8, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>{totals.protein}g protein</span>
            <span style={{ background: "#f59e0b18", color: "#d97706", borderRadius: 8, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>{totals.carbs}g carbs</span>
            <span style={{ background: "#6b728018", color: "#6b7280", borderRadius: 8, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>{totals.fat}g fat</span>
          </div>

          {/* Search + GF filter */}
          <div style={{ display: "flex", gap: 8 }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search all foods…"
              style={{ flex: 1, padding: "8px 12px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 13, fontFamily: "inherit", outline: "none", background: "#f8fafc" }}
            />
            <button onClick={() => setGfOnly(g => !g)} style={{
              padding: "0 12px", borderRadius: 10, border: `2px solid ${gfOnly ? "#16a34a" : "#e2e8f0"}`,
              background: gfOnly ? "#f0fdf4" : "#f8fafc", fontSize: 11, fontWeight: 800,
              color: gfOnly ? "#16a34a" : "#888", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap", flexShrink: 0
            }}>🌾 GF only</button>
          </div>
        </div>

        {/* Food list */}
        <div style={{ overflowY: "auto", flex: 1, padding: "10px 16px" }}>
          {filtered.map(({ cat, items }) => (
            <div key={cat} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: cat === "My Foods" ? "#9333ea" : "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6, paddingBottom: 3, borderBottom: `1px solid ${cat === "My Foods" ? "#9333ea30" : "#e2e8f0"}` }}>
                {cat}{cat === "My Foods" && " ✦"}
              </div>
              {items.map(food => {
                const sel = picked.includes(food.id);
                const count = picked.filter(x => x === food.id).length;
                return (
                  <div key={food.id} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "9px 10px", borderRadius: 10, marginBottom: 4,
                    background: sel ? accent + "0e" : "#fff",
                    border: `1.5px solid ${sel ? accent + "50" : "#e2e8f0"}`,
                    transition: "all 0.12s"
                  }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{food.emoji}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#1a1a2e" }}>{food.name}</span>
                        {isGluten(food.id, customFoodsList)
                          ? <span style={{ fontSize: 9, fontWeight: 800, background: "#fef3c7", color: "#d97706", borderRadius: 4, padding: "1px 5px", letterSpacing: "0.05em" }}>GLUTEN</span>
                          : <span style={{ fontSize: 9, fontWeight: 800, background: "#f0fdf4", color: "#16a34a", borderRadius: 4, padding: "1px 5px", letterSpacing: "0.05em" }}>GF</span>
                        }
                      </div>
                      <div style={{ fontSize: 10, color: "#888", marginTop: 1 }}>
                        {food.cal} cal · {food.protein}g protein · {food.carbs}g carbs · {food.fat}g fat
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                      {count > 0 && (
                        <>
                          <button onClick={() => setPicked(p => { const i = p.lastIndexOf(food.id); return [...p.slice(0,i), ...p.slice(i+1)]; })}
                            style={{ width: 26, height: 26, borderRadius: 8, border: `1.5px solid ${accent}`, background: "#fff", color: accent, fontSize: 16, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>−</button>
                          <span style={{ fontSize: 13, fontWeight: 700, color: accent, minWidth: 14, textAlign: "center" }}>{count}</span>
                        </>
                      )}
                      <button onClick={() => setPicked(p => [...p, food.id])}
                        style={{ width: 26, height: 26, borderRadius: 8, border: `1.5px solid ${sel ? accent : "#d1d5db"}`, background: sel ? accent : "#fff", color: sel ? "#fff" : "#555", fontSize: 16, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>+</button>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Save button */}
        <div style={{ padding: "12px 16px 28px", background: "#fff", borderTop: "1px solid #e2e8f0", flexShrink: 0 }}>
          <button onClick={() => { onDone(picked); onClose(); }} style={{
            width: "100%", padding: "13px", borderRadius: 12,
            background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
            color: "#fff", border: "none", fontSize: 14, fontWeight: 800,
            cursor: "pointer", fontFamily: "inherit",
            boxShadow: `0 4px 16px ${accent}44`
          }}>
            Save {label} · {totals.cal} cal
          </button>
        </div>
      </div>
    </div>
    {showAdd && (
      <AddFoodModal
        onAdd={(cat, food) => { onAddCustom(cat, food); }}
        onClose={() => setShowAdd(false)}
      />
    )}
    </>
  );
}

// ── MEAL SLOT CARD ────────────────────────────────────────────────────────────
function MealSlotCard({ slot, foodIds, onEdit }) {
  const { label, emoji, accent } = SLOT_META[slot];
  const totals = sumFoods(foodIds);
  const foods = foodIds.map(id => getFood(id)).filter(Boolean);
  const hasGluten = foodIds.some(id => isGluten(id));

  const grouped = foods.reduce((acc, f) => {
    acc[f.id] = acc[f.id] ? { ...f, count: acc[f.id].count + 1 } : { ...f, count: 1 };
    return acc;
  }, {});
  const unique = Object.values(grouped);

  return (
    <div style={{ background: "#fff", border: `1.5px solid ${accent}28`, borderRadius: 14, padding: "12px 14px", marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: unique.length ? 8 : 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 16 }}>{emoji}</span>
          <span style={{ fontSize: 10, fontWeight: 800, color: accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {unique.length > 0 && (
            <>
              <span style={{ fontSize: 12, fontWeight: 800, color: accent }}>{totals.cal} cal</span>
              <span style={{ fontSize: 11, color: "#3b82f6", fontWeight: 700 }}>{totals.protein}g P</span>
            </>
          )}
          <button onClick={onEdit} style={{
            background: accent + "15", border: `1.5px solid ${accent}40`,
            borderRadius: 8, padding: "4px 10px", fontSize: 11,
            fontWeight: 700, color: accent, cursor: "pointer", fontFamily: "inherit"
          }}>{unique.length ? "Edit" : "+ Add"}</button>
        </div>
      </div>

      {unique.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {unique.map(f => (
            <span key={f.id} style={{
              background: accent + "10", border: `1px solid ${accent}25`,
              borderRadius: 99, padding: "3px 9px", fontSize: 11, color: "#333",
              display: "flex", alignItems: "center", gap: 4
            }}>
              <span>{f.emoji}</span>
              <span>{f.count > 1 ? `${f.name} ×${f.count}` : f.name}</span>
              <span style={{ color: accent, fontWeight: 700 }}>{f.cal * f.count}</span>
            </span>
          ))}
        </div>
      )}
      {unique.length === 0 && (
        <div style={{ fontSize: 12, color: "#aaa", fontStyle: "italic" }}>No foods added yet — tap + Add</div>
      )}
      {hasGluten && unique.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 6, background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 8, padding: "5px 10px" }}>
          <span style={{ fontSize: 13 }}>🌾</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#d97706" }}>Contains gluten</span>
        </div>
      )}
      {!hasGluten && unique.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 6, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "5px 10px" }}>
          <span style={{ fontSize: 13 }}>✅</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#16a34a" }}>Gluten-free</span>
        </div>
      )}
    </div>
  );
}

// ── SHOPPING LIST ─────────────────────────────────────────────────────────────
function ShoppingList() {
  const [checked, setChecked] = useState({});
  const toggle = key => setChecked(c => ({ ...c, [key]: !c[key] }));
  const catColors = { "Proteins": "#EF4444", "Dairy": "#3B82F6", "Produce": "#16A34A", "Pantry & Grains": "#F59E0B" };
  const total = Object.values(SHOPPING).flat().length;
  const done = Object.values(checked).filter(Boolean).length;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 13, color: "#666" }}>Tap items to check off</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: done === total ? "#16A34A" : "#3b82f6" }}>{done}/{total} ✓</div>
      </div>
      {Object.entries(SHOPPING).map(([cat, items]) => {
        const color = catColors[cat] || "#6B7280";
        return (
          <div key={cat} style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 800, color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${color}30` }}>{cat}</div>
            {items.map(item => {
              const key = cat + item;
              const isDone = checked[key];
              return (
                <div key={item} onClick={() => toggle(key)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 4px", cursor: "pointer", opacity: isDone ? 0.4 : 1, transition: "opacity 0.2s" }}>
                  <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${isDone ? color : "#ddd"}`, background: isDone ? color : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {isDone && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 13, color: "#333", textDecoration: isDone ? "line-through" : "none", fontFamily: "'Lora', serif" }}>{item}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
// ── IMPORT/EXPORT MODAL ──────────────────────────────────────────────────────
function DataModal({ plan, customFoods, weightLog, onImport, onClose }) {
  const [mode, setMode] = useState("menu"); // menu | export | import
  const [importText, setImportText] = useState("");
  const [importError, setImportError] = useState("");
  const [copied, setCopied] = useState(false);

  const exportData = JSON.stringify({ plan, customFoods, weightLog, version: 1 }, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(exportData).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: "My Meal Plan Data", text: exportData });
    } else {
      handleCopy();
    }
  };

  const handleImport = () => {
    try {
      const parsed = JSON.parse(importText.trim());
      if (!parsed.plan || !parsed.customFoods) throw new Error("Invalid format");
      onImport(parsed);
      onClose();
    } catch {
      setImportError("Invalid data — make sure you pasted the full export text.");
    }
  };

  const modalStyle = { position: "fixed", inset: 0, zIndex: 1200, background: "#000c", display: "flex", alignItems: "flex-end" };
  const sheetStyle = { background: "#fff", borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 600, margin: "0 auto", padding: "20px 16px 36px", boxShadow: "0 -8px 40px #0005", maxHeight: "85vh", overflowY: "auto" };
  const btnBase = { width: "100%", padding: "13px", borderRadius: 12, border: "none", fontSize: 14, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", marginBottom: 10 };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={sheetStyle} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 11, color: "#2563eb", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>Backup & Restore</div>
            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Playfair Display', serif", color: "#1a1a2e" }}>
              {mode === "menu" ? "Your Data" : mode === "export" ? "Export Data" : "Import Data"}
            </div>
          </div>
          <button onClick={mode === "menu" ? onClose : () => setMode("menu")} style={{ background: "#f1f5f9", border: "none", borderRadius: 99, width: 32, height: 32, fontSize: 16, cursor: "pointer", color: "#555" }}>
            {mode === "menu" ? "✕" : "←"}
          </button>
        </div>

        {mode === "menu" && (
          <>
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 16, lineHeight: 1.5 }}>
              Export your meal plan and custom foods as text — paste it into Notes, email it to yourself, or share it to restore on another device.
            </div>
            <button onClick={() => setMode("export")} style={{ ...btnBase, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#fff" }}>
              📤 Export My Data
            </button>
            <button onClick={() => setMode("import")} style={{ ...btnBase, background: "#f1f5f9", color: "#1a1a2e" }}>
              📥 Import / Restore Data
            </button>
          </>
        )}

        {mode === "export" && (
          <>
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 12, lineHeight: 1.5 }}>
              Copy this text and save it somewhere safe (Notes app, email to yourself). Use "Import" on another device to restore your data.
            </div>
            <textarea
              readOnly
              value={exportData}
              style={{ width: "100%", height: 180, padding: 10, borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 11, fontFamily: "monospace", resize: "none", background: "#f8fafc", boxSizing: "border-box", color: "#334155" }}
            />
            <button onClick={handleShare} style={{ ...btnBase, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#fff", marginTop: 10 }}>
              📤 Share / Copy to Notes
            </button>
            <button onClick={handleCopy} style={{ ...btnBase, background: copied ? "#dcfce7" : "#f1f5f9", color: copied ? "#16a34a" : "#1a1a2e" }}>
              {copied ? "✓ Copied!" : "📋 Copy to Clipboard"}
            </button>
          </>
        )}

        {mode === "import" && (
          <>
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 12, lineHeight: 1.5 }}>
              Paste your previously exported data below to restore your meal plan and custom foods.
            </div>
            <textarea
              value={importText}
              onChange={e => { setImportText(e.target.value); setImportError(""); }}
              placeholder='Paste your exported data here…'
              style={{ width: "100%", height: 180, padding: 10, borderRadius: 10, border: `1.5px solid ${importError ? "#ef4444" : "#e2e8f0"}`, fontSize: 11, fontFamily: "monospace", resize: "none", background: "#f8fafc", boxSizing: "border-box", color: "#334155", outline: "none" }}
            />
            {importError && <div style={{ fontSize: 12, color: "#ef4444", marginBottom: 8 }}>{importError}</div>}
            <button onClick={handleImport} style={{ ...btnBase, background: importText.trim() ? "linear-gradient(135deg, #16a34a, #15803d)" : "#e2e8f0", color: importText.trim() ? "#fff" : "#aaa", marginTop: 10 }}>
              📥 Restore Data
            </button>
            <div style={{ fontSize: 11, color: "#f59e0b", background: "#fffbeb", borderRadius: 8, padding: "8px 12px" }}>
              ⚠️ This will replace your current meal plan and custom foods.
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── WEIGHT TRACKER ───────────────────────────────────────────────────────────
function WeightTracker({ weightLog, settings, onSave }) {
  const [inputWeight, setInputWeight] = useState("");
  const [inputDate, setInputDate] = useState(new Date().toISOString().slice(0,10));
  const [unit, setUnit] = useState("lbs");

  const sortedLog = [...weightLog].sort((a, b) => new Date(a.date) - new Date(b.date));
  const latest = sortedLog[sortedLog.length - 1];
  const first = sortedLog[0];
  const totalLost = first && latest ? (first.weight - latest.weight).toFixed(1) : null;
  const goalWeight = settings.goalWeight || null;
  const toGo = goalWeight && latest ? (latest.weight - goalWeight).toFixed(1) : null;

  const addEntry = () => {
    const w = parseFloat(inputWeight);
    if (!w || !inputDate) return;
    const existing = weightLog.findIndex(e => e.date === inputDate);
    let newLog;
    if (existing >= 0) {
      newLog = weightLog.map((e, i) => i === existing ? { ...e, weight: w } : e);
    } else {
      newLog = [...weightLog, { date: inputDate, weight: w }];
    }
    onSave(newLog);
    setInputWeight("");
  };

  const removeEntry = (date) => {
    onSave(weightLog.filter(e => e.date !== date));
  };

  // Simple SVG line chart
  const chartData = sortedLog.slice(-30); // last 30 entries
  const W = 320, H = 140, PAD = 32;
  let chart = null;
  if (chartData.length >= 2) {
    const weights = chartData.map(e => e.weight);
    const minW = Math.min(...weights) - 2;
    const maxW = Math.max(...weights) + 2;
    const xScale = (i) => PAD + (i / (chartData.length - 1)) * (W - PAD * 2);
    const yScale = (w) => PAD + (1 - (w - minW) / (maxW - minW)) * (H - PAD * 2);

    const points = chartData.map((e, i) => `${xScale(i)},${yScale(e.weight)}`).join(" ");
    const areaPoints = `${xScale(0)},${H - 8} ` + points + ` ${xScale(chartData.length-1)},${H - 8}`;

    // goal line
    const goalY = goalWeight ? yScale(goalWeight) : null;
    const goalInRange = goalWeight && goalWeight >= minW && goalWeight <= maxW;

    // x-axis labels: first, middle, last
    const labelIdxs = [0, Math.floor((chartData.length-1)/2), chartData.length-1];

    chart = (
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
        <defs>
          <linearGradient id="wgrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map(t => {
          const y = PAD + t * (H - PAD * 2);
          const w = minW + (1 - t) * (maxW - minW);
          return (
            <g key={t}>
              <line x1={PAD} y1={y} x2={W - PAD} y2={y} stroke="#e2e8f0" strokeWidth="1" />
              <text x={PAD - 4} y={y + 4} fontSize="8" fill="#94a3b8" textAnchor="end">{w.toFixed(0)}</text>
            </g>
          );
        })}
        {/* Goal line */}
        {goalInRange && (
          <>
            <line x1={PAD} y1={goalY} x2={W - PAD} y2={goalY} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x={W - PAD + 2} y={goalY + 4} fontSize="8" fill="#f97316">goal</text>
          </>
        )}
        {/* Area fill */}
        <polygon points={areaPoints} fill="url(#wgrad)" />
        {/* Line */}
        <polyline points={points} fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Dots */}
        {chartData.map((e, i) => (
          <circle key={e.date} cx={xScale(i)} cy={yScale(e.weight)} r="3" fill="#16a34a" stroke="#fff" strokeWidth="1.5" />
        ))}
        {/* X labels */}
        {labelIdxs.map(i => (
          <text key={i} x={xScale(i)} y={H - 4} fontSize="8" fill="#94a3b8" textAnchor="middle">
            {chartData[i].date.slice(5)}
          </text>
        ))}
      </svg>
    );
  }

  return (
    <div>
      {/* Stats row */}
      {latest && (
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "10px 14px", flex: 1, minWidth: 80 }}>
            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Current</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", fontFamily: "'Playfair Display', serif" }}>{latest.weight}</div>
            <div style={{ fontSize: 10, color: "#888" }}>{unit}</div>
          </div>
          {totalLost !== null && parseFloat(totalLost) !== 0 && (
            <div style={{ background: parseFloat(totalLost) > 0 ? "#f0fdf4" : "#fff7ed", border: `1.5px solid ${parseFloat(totalLost) > 0 ? "#86efac" : "#fed7aa"}`, borderRadius: 12, padding: "10px 14px", flex: 1, minWidth: 80 }}>
              <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Lost</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: parseFloat(totalLost) > 0 ? "#16a34a" : "#f97316", fontFamily: "'Playfair Display', serif" }}>{totalLost > 0 ? totalLost : Math.abs(totalLost)}</div>
              <div style={{ fontSize: 10, color: "#888" }}>{unit} total</div>
            </div>
          )}
          {toGo !== null && parseFloat(toGo) > 0 && (
            <div style={{ background: "#eff6ff", border: "1.5px solid #bfdbfe", borderRadius: 12, padding: "10px 14px", flex: 1, minWidth: 80 }}>
              <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>To Go</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#2563eb", fontFamily: "'Playfair Display', serif" }}>{toGo}</div>
              <div style={{ fontSize: 10, color: "#888" }}>{unit} to goal</div>
            </div>
          )}
        </div>
      )}

      {/* Chart */}
      {chart ? (
        <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 14, padding: "14px 14px 8px", marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
            Progress {chartData.length < sortedLog.length ? `(last 30 entries)` : ""}
          </div>
          {chart}
        </div>
      ) : (
        <div style={{ background: "#f8fafc", border: "1.5px dashed #e2e8f0", borderRadius: 14, padding: "24px", textAlign: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 24, marginBottom: 6 }}>📉</div>
          <div style={{ fontSize: 13, color: "#888" }}>Log at least 2 entries to see your progress chart</div>
        </div>
      )}

      {/* Log entry */}
      <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 14, padding: "14px", marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: "#16a34a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Log Weight</div>
        <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: "#888", marginBottom: 4 }}>Date</div>
            <input type="date" value={inputDate} onChange={e => setInputDate(e.target.value)}
              style={{ width: "100%", padding: "9px 10px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ width: 90 }}>
            <div style={{ fontSize: 10, color: "#888", marginBottom: 4 }}>Weight ({unit})</div>
            <input type="number" value={inputWeight} onChange={e => setInputWeight(e.target.value)}
              placeholder="0.0" step="0.1"
              style={{ width: "100%", padding: "9px 10px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
          </div>
          <button onClick={addEntry} style={{ height: 40, padding: "0 14px", borderRadius: 10, background: "linear-gradient(135deg, #16a34a, #15803d)", color: "#fff", border: "none", fontSize: 13, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>+ Log</button>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          {["lbs","kg"].map(u => (
            <button key={u} onClick={() => setUnit(u)} style={{ padding: "4px 12px", borderRadius: 99, border: `1.5px solid ${unit === u ? "#16a34a" : "#e2e8f0"}`, background: unit === u ? "#f0fdf4" : "#fafafa", fontSize: 11, fontWeight: 700, color: unit === u ? "#16a34a" : "#888", cursor: "pointer", fontFamily: "inherit" }}>{u}</button>
          ))}
        </div>
      </div>

      {/* Log history */}
      {sortedLog.length > 0 && (
        <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 14, padding: "14px" }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>History</div>
          {[...sortedLog].reverse().map(entry => (
            <div key={entry.date} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #f1f5f9" }}>
              <span style={{ fontSize: 13, color: "#555", fontFamily: "'Lora', serif" }}>{entry.date}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>{entry.weight} {unit}</span>
                <button onClick={() => removeEntry(entry.date)} style={{ background: "none", border: "none", color: "#cbd5e1", fontSize: 16, cursor: "pointer", padding: "0 2px" }}>×</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── SETTINGS MODAL ───────────────────────────────────────────────────────────
function SettingsModal({ settings, onSave, onClose }) {
  const [name, setName] = useState(settings.name || "");
  const [calTarget, setCalTarget] = useState(settings.calTarget || 1450);
  const [goal, setGoal] = useState(settings.goal || "lose");
  const [goalWeight, setGoalWeight] = useState(settings.goalWeight || "");

  const GOALS = [
    { id: "lose", label: "Lose weight", sub: "500 cal deficit" },
    { id: "maintain", label: "Maintain weight", sub: "balanced intake" },
    { id: "gain", label: "Gain / build muscle", sub: "500 cal surplus" },
  ];

  const suggestedTargets = { lose: [1200, 1300, 1400, 1500, 1600, 1700], maintain: [1600, 1800, 2000, 2200, 2400], gain: [2000, 2200, 2400, 2600, 2800, 3000] };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1200, background: "#000c", display: "flex", alignItems: "flex-end" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 600, margin: "0 auto", padding: "20px 16px 36px", boxShadow: "0 -8px 40px #0005", maxHeight: "85vh", overflowY: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 11, color: "#f97316", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>Personalize</div>
            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Playfair Display', serif", color: "#1a1a2e" }}>My Settings</div>
          </div>
          <button onClick={onClose} style={{ background: "#f1f5f9", border: "none", borderRadius: 99, width: 32, height: 32, fontSize: 16, cursor: "pointer", color: "#555" }}>✕</button>
        </div>

        <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Your Name (optional)</div>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Nicole" style={{ width: "100%", padding: "9px 12px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box", marginBottom: 18 }} />

        <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Goal</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
          {GOALS.map(g => (
            <div key={g.id} onClick={() => setGoal(g.id)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderRadius: 10, border: `2px solid ${goal === g.id ? "#f97316" : "#e2e8f0"}`, background: goal === g.id ? "#fff7ed" : "#fafafa", cursor: "pointer" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{g.label}</div>
                <div style={{ fontSize: 11, color: "#888" }}>{g.sub}</div>
              </div>
              {goal === g.id && <span style={{ color: "#f97316", fontSize: 18 }}>✓</span>}
            </div>
          ))}
        </div>

        <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Daily Calorie Target</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
          {suggestedTargets[goal].map(cal => (
            <button key={cal} onClick={() => setCalTarget(cal)} style={{ padding: "6px 14px", borderRadius: 99, border: `2px solid ${calTarget === cal ? "#f97316" : "#e2e8f0"}`, background: calTarget === cal ? "#fff7ed" : "#fafafa", fontSize: 12, fontWeight: 700, color: calTarget === cal ? "#f97316" : "#555", cursor: "pointer", fontFamily: "inherit" }}>{cal}</button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <span style={{ fontSize: 12, color: "#888" }}>Custom:</span>
          <input type="number" value={calTarget} onChange={e => setCalTarget(+e.target.value)} style={{ width: 90, padding: "7px 10px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 13, fontFamily: "inherit", outline: "none" }} />
          <span style={{ fontSize: 12, color: "#888" }}>cal/day</span>
        </div>

        <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Goal Weight (optional)</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <input type="number" value={goalWeight} onChange={e => setGoalWeight(e.target.value)} placeholder="e.g. 140" step="0.1"
            style={{ width: 100, padding: "9px 12px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 13, fontFamily: "inherit", outline: "none" }} />
          <span style={{ fontSize: 12, color: "#888" }}>lbs/kg — shows as a target line on your weight chart</span>
        </div>

        <button onClick={() => { onSave({ name, calTarget, goal, goalWeight: goalWeight ? parseFloat(goalWeight) : "" }); onClose(); }} style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", border: "none", fontSize: 14, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
          Save Settings
        </button>
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
const LS_PLAN = "mealplan_plan_v1";
const LS_CUSTOM = "mealplan_custom_v1";
const LS_SETTINGS = "mealplan_settings_v1";
const LS_WEIGHT = "mealplan_weight_v1";

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

export default function App() {
  const [tab, setTab] = useState("week");
  const [dayIdx, setDayIdx] = useState(0);
  const [plan, setPlan] = useState(() => loadFromStorage(LS_PLAN, DEFAULT_PLAN));
  const [customFoods, setCustomFoods] = useState(() => loadFromStorage(LS_CUSTOM, {}));
  const [settings, setSettings] = useState(() => loadFromStorage(LS_SETTINGS, { name: "", calTarget: 1450, goal: "lose", goalWeight: "" }));
  const [weightLog, setWeightLog] = useState(() => loadFromStorage(LS_WEIGHT, []));
  const [picker, setPicker] = useState(null);
  const [showDataModal, setShowDataModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  _customFoods = Object.values(customFoods).flat();

  const savePlan = (newPlan) => {
    setPlan(newPlan);
    try { localStorage.setItem(LS_PLAN, JSON.stringify(newPlan)); } catch {}
    flashSaved();
  };

  const saveCustomFoods = (newCustom) => {
    setCustomFoods(newCustom);
    try { localStorage.setItem(LS_CUSTOM, JSON.stringify(newCustom)); } catch {}
  };

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
    try { localStorage.setItem(LS_SETTINGS, JSON.stringify(newSettings)); } catch {}
  };

  const saveWeightLog = (log) => {
    setWeightLog(log);
    try { localStorage.setItem(LS_WEIGHT, JSON.stringify(log)); } catch {}
  };

  const flashSaved = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 1500);
  };

  const currentDay = DAYS[dayIdx];
  const currentMeals = plan[currentDay];

  const updateSlot = (slot, ids) => {
    savePlan({ ...plan, [currentDay]: { ...plan[currentDay], [slot]: ids } });
  };

  const addCustomFood = (cat, food) => {
    const newCustom = { ...customFoods, [cat]: [...(customFoods[cat] || []), food] };
    saveCustomFoods(newCustom);
  };

  const handleImport = ({ plan: newPlan, customFoods: newCustom, weightLog: newWeight }) => {
    savePlan(newPlan);
    saveCustomFoods(newCustom);
    if (newWeight) saveWeightLog(newWeight);
  };

  const totals = dayTotals(currentMeals);
  const target = settings.calTarget || 1450;
  const calPct = Math.min(100, Math.round(totals.cal / target * 100));
  const calColor = totals.cal < target * 0.93 ? "#F59E0B" : totals.cal > target * 1.07 ? "#EF4444" : "#16A34A";

  // Day button color uses per-person target
  const dayCalColor = (cal) => cal > target * 1.07 ? "#ef4444" : cal < target * 0.93 ? "#f59e0b" : "#16a34a";

  const goalLabel = { lose: "Lose weight", maintain: "Maintain", gain: "Build muscle" }[settings.goal] || "Lose weight";

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #fafaf7 0%, #f0f4ff 100%)", fontFamily: "'Lora', Georgia, serif" }}>

      {savedToast && (
        <div style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 2000, background: "#16a34a", color: "#fff", borderRadius: 99, padding: "6px 16px", fontSize: 12, fontWeight: 700, boxShadow: "0 4px 16px #16a34a44", pointerEvents: "none" }}>
          ✓ Saved
        </div>
      )}

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: "24px 20px 16px", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 2 }}>{settings.name ? `${settings.name}'s` : "Your"} Personal</div>
            <div style={{ fontSize: 24, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Meal Plan</div>
            <div style={{ fontSize: 12, color: "#60a5fa", marginTop: 2 }}>{target.toLocaleString()} cal · {goalLabel}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
            <button onClick={() => setShowSettings(true)} style={{ background: "#ffffff18", border: "1.5px solid #ffffff30", borderRadius: 10, padding: "6px 10px", fontSize: 11, fontWeight: 700, color: "#cbd5e1", cursor: "pointer", fontFamily: "inherit" }}>⚙️ Settings</button>
            <button onClick={() => setShowDataModal(true)} style={{ background: "#ffffff18", border: "1.5px solid #ffffff30", borderRadius: 10, padding: "6px 10px", fontSize: 11, fontWeight: 700, color: "#cbd5e1", cursor: "pointer", fontFamily: "inherit" }}>💾 Backup</button>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 14 }}>
          {[{id:"week",label:"Week Plan"},{id:"weight",label:"Weight"},{id:"shop",label:"Shopping"}].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              background: tab === t.id ? "#fff" : "transparent",
              color: tab === t.id ? "#1a1a2e" : "#94a3b8",
              border: `1.5px solid ${tab === t.id ? "#fff" : "#334155"}`,
              borderRadius: 99, padding: "5px 16px", fontSize: 12, fontWeight: 700,
              cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s"
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "16px 16px 40px", maxWidth: 600, margin: "0 auto" }}>
        {tab === "week" && (
          <div>
            <div style={{ display: "flex", gap: 5, overflowX: "auto", paddingBottom: 10, marginBottom: 14 }}>
              {DAYS.map((d, i) => {
                const t = dayTotals(plan[d]);
                return (
                  <button key={d} onClick={() => setDayIdx(i)} style={{
                    background: dayIdx === i ? "#1a1a2e" : "#fff",
                    color: dayIdx === i ? "#fff" : "#555",
                    border: `1.5px solid ${dayIdx === i ? "#1a1a2e" : "#e2e8f0"}`,
                    borderRadius: 10, padding: "7px 11px", fontSize: 11, fontWeight: 700,
                    cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap", flexShrink: 0
                  }}>
                    <div>{d.slice(0,3)}</div>
                    <div style={{ fontSize: 10, fontWeight: 400, color: dayIdx === i ? "#94a3b8" : dayCalColor(t.cal) }}>{t.cal}</div>
                  </button>
                );
              })}
            </div>

            <div style={{ fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#1a1a2e", marginBottom: 4 }}>{currentDay}</div>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 12 }}>Tap "+ Add" or "Edit" · Use "+ New Food" inside to add your own</div>

            {MEAL_SLOTS.map(slot => (
              <MealSlotCard key={slot} slot={slot} foodIds={currentMeals[slot] || []} onEdit={() => setPicker(slot)} />
            ))}

            <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", borderRadius: 14, padding: "14px 18px", marginTop: 4, color: "#fff" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.1em", marginBottom: 8 }}>DAILY TOTALS</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                <span style={{ background: calColor + "30", color: calColor, borderRadius: 8, padding: "4px 12px", fontSize: 14, fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>{totals.cal} cal</span>
                <span style={{ background: "#3b82f620", color: "#60a5fa", borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 700 }}>{totals.protein}g protein</span>
                <span style={{ background: "#f59e0b20", color: "#fbbf24", borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 700 }}>{totals.carbs}g carbs</span>
                <span style={{ background: "#6b728020", color: "#9ca3af", borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 700 }}>{totals.fat}g fat</span>
              </div>
              <div style={{ background: "#ffffff15", borderRadius: 99, height: 6, overflow: "hidden" }}>
                <div style={{ width: calPct + "%", background: calColor, height: "100%", borderRadius: 99, transition: "width 0.5s" }} />
              </div>
              <div style={{ fontSize: 10, color: "#64748b", marginTop: 4 }}>
                {totals.cal} / {target.toLocaleString()} cal · {calPct < 93 ? "⬆ a bit low" : calPct > 107 ? "⬇ slightly over" : "✓ on track"}
              </div>
            </div>
          </div>
        )}

        {tab === "weight" && <WeightTracker weightLog={weightLog} settings={settings} onSave={saveWeightLog} />}
        {tab === "shop" && <ShoppingList />}
      </div>

      {picker && (
        <FoodPicker slot={picker} selectedIds={currentMeals[picker] || []} customFoods={customFoods} onDone={ids => updateSlot(picker, ids)} onAddCustom={addCustomFood} onClose={() => setPicker(null)} />
      )}

      {showDataModal && (
        <DataModal plan={plan} customFoods={customFoods} weightLog={weightLog} onImport={handleImport} onClose={() => setShowDataModal(false)} />
      )}

      {showSettings && (
        <SettingsModal settings={settings} onSave={saveSettings} onClose={() => setShowSettings(false)} />
      )}

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora:wght@400;700&display=swap');`}</style>
    </div>
  );
}
