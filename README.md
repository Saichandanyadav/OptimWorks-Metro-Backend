```markdown
# Hyderabad Metro Backend System Design 🚇

## 📌 Objective

Design and outline a comprehensive backend system for a **"Hyderabad Metro Route Finder"** application.  
This system helps users find optimal metro routes and fares and provides administrators with tools to manage metro network data.

---

## ✅ Core System Requirements

### 👨‍💼 Network Management APIs
- Manage metro lines, stations, and their interconnections.

### 🚉 Route Finding
- Find the **shortest (optimal) path** between any two stations using **graph traversal algorithms**.

### 💸 Fare Calculation
- Based on **distance**, **number of stations**, and **line changes**.

### ⏱️ Estimated Time Calculation
- Estimate **travel time** using station and interchange data.

### 🌐 API Design
- RESTful APIs with **JSON** responses for:
  - Admin functionalities (line/station management).
  - User functionalities (route finding).

---

## 🛠️ Technical Stack

| Layer         | Technology     |
|---------------|----------------|
| Language      | Node.js        |
| Framework     | Express.js     |
| Database      | MongoDB        |
| API Standard  | REST (JSON)    |
| Algorithms    | Dijkstra's / BFS / A* |

---

## 🚦 Metro Network Lines

- **Red Line (Line 1)**: Miyapur ↔ LB Nagar  
- **Blue Line (Line 3)**: Nagole ↔ Raidurg  
- **Green Line (Line 2)**: JBS Parade Ground ↔ MGBS  

### 🔄 Major Interchange Stations
- **Ameerpet** (Red–Blue)  
- **Secunderabad** (Red–Blue–Green)  
- **Paradise** (Red–Blue)  
- **Begumpet** (Red–Blue)

---

## 💰 Fare Calculation Rules

- **Base Fare**: ₹10 for first 2 stations  
- **Additional**: ₹5 per extra station  
- **Interchange Penalty**: ₹2 per line change  

---

## ⏳ Estimated Time Calculation

**Formula:**
```

Estimated Time = (number\_of\_stations - 1) × 2.5 + (number\_of\_interchanges × 5)

```

- Avg time per station: `2.5 minutes`  
- Interchange time: `5 minutes`  

---

## 📡 API Endpoint Definitions

### 🧩 Line Management

#### ➕ Create a new metro line
```

POST /api/lines

````
**Request Body:**
```json
{
  "name": "Red Line",
  "color": "#FF0000"
}
````

**Response:**

```json
{
  "id": "line123",
  "name": "Red Line",
  "color": "#FF0000"
}
```

#### 📄 Get all lines

```
GET /api/lines
```

#### 📌 Get details of a line

```
GET /api/lines/{line_id}
```

#### ✏️ Update a line

```
PUT /api/lines/{line_id}
```

**Request Body:**

```json
{
  "name": "Updated Line Name",
  "color": "#00FF00"
}
```

#### ❌ Delete a line

```
DELETE /api/lines/{line_id}
```

---

### 🏙️ Station Management

#### ➕ Add station to a line

```
POST /api/lines/{line_id}/stations
```

**Request Body:**

```json
{
  "station_name": "Hitec City",
  "distance_from_previous_station": 1.5,
  "station_number_on_line": 7,
  "is_interchange": false
}
```

#### 📄 List all stations in a line

```
GET /api/lines/{line_id}/stations
```

#### 🌍 List all stations (across network)

```
GET /api/stations
```

---

### 🚀 Route Finding

#### 🔍 Find optimal route

```
POST /api/route/find
```

**Request Body:**

```json
{
  "source": "Miyapur",
  "destination": "Hitec City"
}
```

**Example Response:**

```json
{
  "route": ["Miyapur", "KPHB", "Ameerpet", "Begumpet", "Hitec City"],
  "totalStations": 19,
  "totalDistance": 28.5,
  "totalFare": 97.0,
  "interchanges": ["Ameerpet"],
  "estimatedTime": "50 minutes",
  "lineChanges": [
    { "from": "Red Line", "to": "Blue Line", "at": "Ameerpet" }
  ]
}
```

---

## 📈 Additional Notes

* **All APIs follow REST principles.**
* **Future Enhancements**:

  * Add real-time tracking of trains.
  * User-specific saved routes.
  * Admin dashboard for metro network analytics.

---

## 📬 Contact

For any queries or enhancements, please reach out via [LinkedIn](https://www.linkedin.com/in/saichandanyadav/)

