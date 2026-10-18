import { useState, useEffect } from "react";
import { Link } from "react-router"; 

type GenKarti = {
  ad: string;
  varyant: string;
  kromozom: string;
  siniflandirma: string;
  durum: string;
  renk: string;
  bg: string;
};

export default function GenKatalogu() {
  const [genler, setGenler] = useState<GenKarti[]>(() => {
    if (typeof window !== "undefined") {
      const kayitliVeri = localStorage.getItem("merigeneDataV1");
      if (kayitliVeri) {
        return JSON.parse(kayitliVeri); 
      }
    }
    return [
      { ad: "TP53", varyant: "c.524G>A", kromozom: "17p13.1", siniflandirma: "Pathogenic", durum: "Sanger Doğrulandı", renk: "#991b1b", bg: "#fee2e2" },
      { ad: "BRCA1", varyant: "c.5266dupC", kromozom: "17q21.31", siniflandirma: "Pathogenic", durum: "Analiz Bekliyor", renk: "#991b1b", bg: "#fee2e2" }
    ];
  });

  useEffect(() => {
    localStorage.setItem("merigeneDataV1", JSON.stringify(genler));
  }, [genler]);

  const [yeniGenAd, setYeniGenAd] = useState("");
  const [yeniVaryant, setYeniVaryant] = useState("");
  const [yeniKromozom, setYeniKromozom] = useState("");
  const [yeniSiniflandirma, setYeniSiniflandirma] = useState("VUS");
  const [aramaMetni, setAramaMetni] = useState("");

  const genEkle = (e: React.FormEvent) => {
    e.preventDefault();
    if (yeniGenAd === "" || yeniVaryant === "" || yeniKromozom === "") return;

    let renk = "#1e40af";
    let bg = "#dbeafe";
    
    if (yeniSiniflandirma === "Pathogenic" || yeniSiniflandirma === "Likely Pathogenic") {
      renk = "#991b1b";
      bg = "#fee2e2";
    } else if (yeniSiniflandirma === "Benign" || yeniSiniflandirma === "Likely Benign") {
      renk = "#166534";
      bg = "#dcfce3";
    } else if (yeniSiniflandirma === "VUS") {
      renk = "#854d0e";
      bg = "#fef08a";
    }

    const yeniKayit: GenKarti = {
      ad: yeniGenAd.toUpperCase(),
      varyant: yeniVaryant,
      kromozom: yeniKromozom,
      siniflandirma: yeniSiniflandirma,
      durum: "İnceleniyor",
      renk: renk,
      bg: bg
    };

    setGenler([...genler, yeniKayit]);
    setYeniGenAd("");
    setYeniVaryant("");
    setYeniKromozom("");
    setYeniSiniflandirma("VUS");
  };

  const genSil = (silinecekIndex: number) => {
    const guncelGenler = genler.filter((_, index) => index !== silinecekIndex);
    setGenler(guncelGenler);
  };

  const durumGuncelle = (index: number, yeniDurum: string) => {
    const guncelGenler = [...genler];
    guncelGenler[index].durum = yeniDurum;
    setGenler(guncelGenler);
  };

  const durumRengiGetir = (durum: string) => {
    switch (durum) {
      case "İnceleniyor": return { bg: "#dbeafe", text: "#1e40af" }; 
      case "Analiz Bekliyor": return { bg: "#fef08a", text: "#854d0e" }; 
      case "Sanger Doğrulandı": return { bg: "#dcfce3", text: "#166534" }; 
      case "Raporlandı": return { bg: "#f3e8ff", text: "#6b21a8" }; 
      default: return { bg: "#f1f5f9", text: "#475569" }; 
    }
  };

  const filtrelenmisGenler = genler.filter(gen => 
    gen.ad.toLowerCase().includes(aramaMetni.toLowerCase()) || 
    gen.varyant.toLowerCase().includes(aramaMetni.toLowerCase()) ||
    gen.siniflandirma.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      <nav className="bg-indigo-950 px-10 py-5 flex justify-between items-center shadow-md border-b border-indigo-900">
        <div className="text-yellow-400 text-4xl font-black tracking-widest uppercase drop-shadow-sm">
          MeriGene
        </div>
        <div className="flex gap-8">
          <Link to="/" className="text-white no-underline text-lg font-bold hover:text-yellow-400 transition-colors">🏠 Ana Sayfa</Link>
          <Link to="/hakkinda" className="text-indigo-300 no-underline text-lg font-bold hover:text-white transition-colors">👩‍🔬 Hakkında</Link>
        </div>
      </nav>

      <div className="p-10 max-w-5xl mx-auto">
        <h1 className="border-b-2 border-slate-300 pb-3 text-slate-800 mt-0 mb-8 text-2xl font-semibold">Laboratuvar Kayıtları</h1>
        
        <div className="bg-white p-7 rounded-xl mb-10 border border-slate-200 shadow-sm">
          <h3 className="m-0 mb-5 text-slate-700 text-xl font-semibold">➕ Yeni Varyant Ekle</h3>
          <form onSubmit={genEkle} className="flex gap-4 flex-wrap">
            <input 
              type="text" 
              placeholder="Gen (Örn: TP53)" 
              value={yeniGenAd}
              onChange={(e) => setYeniGenAd(e.target.value)}
              className="flex-1 p-3 rounded-lg border border-slate-300 outline-none text-slate-900 bg-white placeholder-slate-400 min-w-[120px] focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
            />
            <input 
              type="text" 
              placeholder="Varyant (Örn: p.Arg175His)" 
              value={yeniVaryant}
              onChange={(e) => setYeniVaryant(e.target.value)}
              className="flex-[1.5] p-3 rounded-lg border border-slate-300 outline-none text-slate-900 bg-white placeholder-slate-400 min-w-[150px] focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
            />
            <input 
              type="text" 
              placeholder="Kromozom" 
              value={yeniKromozom}
              onChange={(e) => setYeniKromozom(e.target.value)}
              className="flex-1 p-3 rounded-lg border border-slate-300 outline-none text-slate-900 bg-white placeholder-slate-400 min-w-[120px] focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
            />
            <select 
              value={yeniSiniflandirma} 
              onChange={(e) => setYeniSiniflandirma(e.target.value)}
              className="flex-[1.5] p-3 rounded-lg border border-slate-300 outline-none text-slate-900 bg-white min-w-[150px] focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
            >
              <option value="Pathogenic">Pathogenic</option>
              <option value="Likely Pathogenic">Likely Pathogenic</option>
              <option value="VUS">VUS</option>
              <option value="Likely Benign">Likely Benign</option>
              <option value="Benign">Benign</option>
            </select>
            <button type="submit" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-800 text-white border-none rounded-lg cursor-pointer font-bold transition-all">
              Kataloğa Ekle
            </button>
          </form>
        </div>

        <div className="mb-10">
          <input 
            type="text" 
            placeholder="🔍 Gen, varyant veya sınıflandırma ara (Örn: BRCA1 veya Pathogenic)..." 
            value={aramaMetni}
            onChange={(e) => setAramaMetni(e.target.value)}
            className="w-full p-4 rounded-xl border border-slate-300 outline-none text-slate-900 bg-white placeholder-slate-400 text-lg shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
          />
        </div>

        <div className="flex gap-6 flex-wrap">
          {filtrelenmisGenler.map((gen: GenKarti, index: number) => {
            const durumRenk = durumRengiGetir(gen.durum);
            return (
              <div key={index} className="border border-slate-200 p-6 rounded-xl flex-[1_1_400px] bg-white shadow-md relative group hover:shadow-xl transition-all duration-300">
                <button 
                  onClick={() => genSil(index)}
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white border-none rounded-md px-3 py-1.5 cursor-pointer font-bold opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  Sil
                </button>
                
                <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4 pr-14 relative">
                  <h2 className="text-slate-900 m-0 text-2xl font-bold">
                    {gen.ad} <span className="text-lg text-slate-400 font-normal">| {gen.varyant}</span>
                  </h2>
                  <select 
                    value={gen.durum}
                    onChange={(e) => durumGuncelle(index, e.target.value)}
                    className="px-3 py-1.5 rounded-full text-sm font-bold tracking-wide border-none outline-none cursor-pointer appearance-none text-center shadow-sm transition-colors duration-300"
                    style={{ backgroundColor: durumRenk.bg, color: durumRenk.text }}
                  >
                    <option value="İnceleniyor">İnceleniyor</option>
                    <option value="Analiz Bekliyor">Analiz Bekliyor</option>
                    <option value="Sanger Doğrulandı">Sanger Doğrulandı</option>
                    <option value="Raporlandı">Raporlandı</option>
                  </select>
                </div>
                
                <p className="my-2 text-slate-600 text-lg"><strong>Kromozom Konumu:</strong> {gen.kromozom}</p>
                <p className="my-2 text-slate-600 text-lg">
                  <strong>Varyant Sınıflandırması:</strong> <span className="font-bold" style={{ color: gen.renk }}>{gen.siniflandirma}</span>
                </p>
                
                <div className="flex gap-3 mt-6 flex-wrap">
                  <a href={`https://www.genecards.org/cgi-bin/carddisp.pl?gene=${gen.ad}`} target="_blank" rel="noreferrer" className="no-underline px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-bold transition-colors">
                    GeneCards
                  </a>
                  <a href="https://varsome.com/" target="_blank" rel="noreferrer" className="no-underline px-4 py-2.5 bg-violet-500 hover:bg-violet-600 text-white rounded-lg text-sm font-bold transition-colors">
                    VarSome
                  </a>
                  <a href="https://franklin.genoox.com/" target="_blank" rel="noreferrer" className="no-underline px-4 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-bold transition-colors">
                    Franklin
                  </a>
                  <a href={`https://www.ncbi.nlm.nih.gov/clinvar/?term=${gen.ad}[gene]+AND+${gen.varyant}`} target="_blank" rel="noreferrer" className="no-underline px-4 py-2.5 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-sm font-bold transition-colors">
                    ClinVar
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
