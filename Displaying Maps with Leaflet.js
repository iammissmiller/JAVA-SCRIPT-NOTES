**Displaying Maps with Leaflet.js**

### **1. Introduction to Leaflet**

* **Leaflet** is an **open-source JavaScript library** used to display **mobile-friendly interactive maps**.
* It allows embedding dynamic maps into web applications.
* It’s a **third-party library** — written by other developers but free to use in your projects.

---

### **2. Including Leaflet in a Project**

#### **Option 1: Using a CDN (Recommended for beginners)**

* You can directly include Leaflet from a **CDN (Content Delivery Network)**.
* Example (to add in your HTML `<head>` section):

```html
<!-- Leaflet CSS -->
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
/>

<!-- Leaflet JS -->
<script
  defer
  src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
></script>

<!-- Your script (must come after Leaflet) -->
<script defer src="script.js"></script>
```

✅ **Note:**
Use the `defer` attribute so that scripts are executed **after** HTML is parsed and in **correct order** (Leaflet first, then your script).

#### **Option 2: Using npm (for advanced setups)**

```bash
npm install leaflet
```

Then import it into your JavaScript file:

```js
import L from 'leaflet';
```

---

### **3. Setting Up the HTML**

Add a `<div>` where the map will be displayed:

```html
<div id="map"></div>
```

You must also give it **height and width** in CSS, or the map won’t appear:

```css
#map {
  height: 100vh;
  width: 100%;
}
```

---

### **4. Basic JavaScript Setup**

```js
// Example coordinates (latitude, longitude)
const coords = [51.505, -0.09]; // London

// Initialize map and set view
const map = L.map('map').setView(coords, 13);

// Add tile layer (map style)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker
L.marker(coords)
  .addTo(map)
  .bindPopup('A marker in London!')
  .openPopup();
```

---

### **5. Understanding the Components**

| Component                           | Description                                              |
| ----------------------------------- | -------------------------------------------------------- |
| `L.map('map')`                      | Creates a map inside the `<div>` with ID `map`           |
| `.setView([lat, lng], zoom)`        | Sets the map’s center and zoom level                     |
| `L.tileLayer(urlTemplate, options)` | Loads map tiles from OpenStreetMap (or another provider) |
| `L.marker([lat, lng])`              | Creates a map marker at the given location               |
| `.bindPopup("text")`                | Adds a popup to the marker                               |
| `.addTo(map)`                       | Adds an element (like tile layer or marker) to the map   |

---

### **6. Tile Layers**

* Maps are composed of small square images called **tiles**.
* The default Leaflet tiles come from **OpenStreetMap**, but you can use others (like Mapbox, Stamen, or custom ones).
* Changing the tile style is as simple as changing the URL:

  ```js
  'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
  ```
* The `fr/hot/` style gives a **different visual theme** (a “Humanitarian” style map).

---

### **7. Global Variable Behavior**

* Scripts loaded in the HTML share the **global scope** (window object).
* A variable declared globally in one script (like `other.js`) can be accessed by another script that runs **after it** in the HTML.
* Example:

  ```html
  <script src="other.js"></script>
  <script src="script.js"></script>
  ```

  `script.js` can access variables from `other.js`, but not the other way around.

---

### **8. Zoom Level**

* The second parameter in `.setView()` sets zoom:

  * Lower value (e.g., 10) → zoomed out.
  * Higher value (e.g., 17) → zoomed in.
  * Typical default: **13**.

---

### **9. Example Output**

* The map centers on the provided coordinates (e.g., your location from Geolocation API).
* Displays a marker and popup.
* Uses OpenStreetMap tiles with a chosen visual style.

---

### **10. Next Steps**

In the next phase:

* Add **click functionality** to display a marker and popup at the user’s click position.
* Integrate it with **Geolocation API** to dynamically center the map on the user’s actual coordinates.
