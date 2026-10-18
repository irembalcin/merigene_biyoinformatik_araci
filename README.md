# 🧬 MeriGene - Genetik Laboratuvar Asistanı

🚀 **Canlı Demo:** [MeriGene Uygulamasını Test Etmek İçin Tıklayın](https://merigenebiyoinformatik.netlify.app/)

MeriGene, moleküler genetik laboratuvarlarındaki varyant analiz, ACMG sınıflandırması ve Sanger sekanslama süreçlerini dijital ortamda takip etmek için geliştirilmiş modern bir web asistanıdır. Laboratuvar teknisyenleri ve biyoinformatik uzmanları için tasarlanan bu araç, karmaşık veri tabloları arasında kaybolmadan hasta varyantlarını şık bir arayüzle yönetmeyi sağlar.

## ✨ Temel Özellikler

* **🔬 Dinamik Durum Takibi:** Varyantları "İnceleniyor", "Analiz Bekliyor", "Sanger Doğrulandı" ve "Raporlandı" aşamalarına göre renk kodlu etiketlerle sınıflandırma.
* **🌐 Entegre Veritabanı Yönlendirmeleri:** Her gen ve varyant kartı üzerinden **GeneCards, VarSome, Franklin ve ClinVar** veritabanlarına tek tıkla otomatik arama yönlendirmesi.
* **📥 Excel (CSV) Aktarımı:** Tüm laboratuvar kayıtlarını tek tıkla UTF-8 formatında, bozulmayan Türkçe karakterlerle dijital tabloya (CSV) aktarma imkanı.
* **💾 Yerel Veri Kaydı:** LocalStorage entegrasyonu sayesinde sayfa yenilense bile eklenen varyant kayıtlarının kaybolmaması.
* **🔍 Hızlı Filtreleme:** Binlerce kayıt arasında gen adına, varyant tipine veya sınıflandırmaya (örn: Pathogenic, VUS) göre anında arama yapabilme.

## 🛠️ Kullanılan Teknolojiler

* **Frontend:** React, React Router
* **Stil & Tasarım:** Tailwind CSS
* **Durum Yönetimi:** React Hooks (useState, useEffect) & LocalStorage

## 💻 Yerel Kurulum (Geliştiriciler İçin)

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Depoyu klonlayın:
   ```bash
   git clone [https://github.com/irembalcin/merigene_biyoinformatik_araci.git](https://github.com/irembalcin/merigene_biyoinformatik_araci.git)
