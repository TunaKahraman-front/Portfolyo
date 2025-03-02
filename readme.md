# Semantik HTML ile Kişisel Portfolyo Sayfası

Bu proje, semantik HTML kullanarak kişisel bir portfolyo sayfası oluşturmayı amaçlamaktadır. Sayfanın görselliğini artırmak için CSS kullanılmış ve bazı bölümlerde `<div>` etiketleri ile sayfa düzeni sağlanmıştır. Ayrıca temel bir JavaScript etkileşimi eklenmiştir.

---

## 📂 Proje Dosya Yapısı

- **index.html** → Sayfanın temel yapısını içeren HTML dosyası.
- **style.css** → Sayfanın stil ve tasarım ayarlarını içeren CSS dosyası.
- **script.js** → Sayfanın etkileşimlerini yönetmek için kullanılan JavaScript dosyası.
- **resim1.png - resim6.png** → Sayfada kullanılan görseller.

---

## 📌 Sayfa İçeriği

Bu sayfa aşağıdaki bölümleri içermektedir:

### **1️⃣ Başlık (Header)**
   - `<header>` etiketi içinde adınız ve kısa bir tanıtım bulunur.

### **2️⃣ Navigasyon (Menü)**
   - `<nav>` etiketi kullanılarak en az 3 bağlantı içeren bir menü oluşturulmuştur.

### **3️⃣ Ana İçerik (Main)**
   - **Hakkımda Bölümü** (`<section>`) → Kendinizi tanıtan bir paragraf içerir.
   - **Projeler Bölümü** (`<section>`) → En az iki proje `<article>` kullanılarak açıklanmıştır.
   - **İletişim Bölümü** (`<section>`) → `<address>` etiketi kullanılarak e-posta ve sosyal medya bilgileri gösterilmiştir.

### **4️⃣ Yan Bilgi Alanı (Aside)**
   - `<aside>` etiketi içinde ekstra bilgiler paylaşılmıştır.

### **5️⃣ Alt Bilgi (Footer)**
   - `<footer>` etiketi içinde telif hakkı bilgileri yer alır.

---

## 🎨 CSS Kullanımı

Sayfanın şık ve düzenli görünmesi için CSS dosyasında aşağıdaki teknikler kullanılmıştır:

- **ID ve Class Kullanımı**  
  ✅ En az bir ID (`#menu`, `#footer` vb.)  
  ✅ En az bir Class (`.project-card`, `.profile-picture` vb.)  

- **CSS Seçicileri**  
  ✅ `div` kullanılarak bölümler gruplandırılmıştır.  
  ✅ Element seçiciler (`header`, `section`, `footer`) kullanılmıştır.  
  ✅ Class seçiciler (`.container`, `.button`) kullanılmıştır.  
  ✅ ID seçiciler (`#nav`, `#hero`) en az bir yerde kullanılmıştır.  
  ✅ Pseudo-class seçiciler (`:hover`, `:focus`) en az bir butonda veya linkte uygulanmıştır.  

---

## 🛠 JavaScript Kullanımı

Sayfanın etkileşimini artırmak için aşağıdaki JavaScript özellikleri eklenmiştir:

- **Aç/Kapa (Toggle) Özelliği**  
  - Bir butona tıklanınca "Projeler" bölümü gizlenip açılmaktadır.

- **Form Doğrulama (Validation)**  
  - İletişim formunda e-posta girişinin boş olup olmadığını kontrol eden bir JavaScript fonksiyonu bulunmaktadır.

- **Tema Değiştirme (Dark/Light Mode)**  
  - Kullanıcı bir butona tıkladığında sayfanın temasını değiştirebilmektedir.

---

## 🚀 Kurulum ve Kullanım

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Tüm proje dosyalarını aynı dizine yerleştirin.
2. `index.html` dosyasını bir tarayıcıda açarak sayfayı görüntüleyin.
3. Eğer dosyaları yerel bir sunucuda çalıştırmak isterseniz, şu komutu terminalde çalıştırabilirsiniz:
   ```sh
   python -m http.server
