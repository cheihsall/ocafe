/* 
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Presentation from "./pages/Presentation";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import News from "./pages/News";
import CitizenSpace from "./pages/CitizenSpace";
import Investment from "./pages/Investment";
import NotFound from "./pages/NotFound";

// Create a new query client
const queryClient = new QueryClient();

// Add console logging for debugging
console.log("App component initialized");

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/presentation" element={<Presentation />} />
              <Route path="/projets" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/actualites" element={<News />} />
              <Route path="/espace-citoyen" element={<CitizenSpace />} />
              <Route path="/investissements" element={<Investment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
 */import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapPin, Users, Coffee, TrendingUp, Clock, Award, AlertCircle, Filter, Download, Calendar, X, FormInput, Target, CheckCircle } from 'lucide-react';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showFilters, setShowFilters] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [formData, setFormData] = useState({
    site: '',
    coffeeAdepte: '', // Nouveau: Adepte du café en général
    wantNescafe: '', // Nouveau: Veut du Nescafé spontanément
    nescafeType: '',
    nescafeAdepte: '', // Adepte spécifique de Nescafé
    feedback: '',
    purchaseIntent: '',
    firstName: '',
    lastName: '',
    whatsapp: '',
    age: '',
    gender: '',
    location: ''
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    // Charger les données depuis le localStorage
    const savedSubmissions = localStorage.getItem('nescafeSubmissions');
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
    
    return () => clearInterval(timer);
  }, []);

  // Sites disponibles avec géolocalisation
const availableSites = [
  { id: 'ucad', name: 'Université Cheikh Anta Diop de Dakar (UCAD)', lat: 14.6928, lng: -17.4467, city: 'Dakar' },
  { id: 'ugb', name: 'Université Gaston Berger de Saint-Louis (UGB)', lat: 16.0500, lng: -16.4667, city: 'Saint-Louis' },
  { id: 'uadb', name: 'Université Alioune Diop de Bambey (UADB)', lat: 14.7000, lng: -16.4700, city: 'Bambey' },
  { id: 'uass', name: 'Université Assane Seck de Ziguinchor (UASZ)', lat: 12.5600, lng: -16.2800, city: 'Ziguinchor' },
  { id: 'uvs', name: 'Université Virtuelle du Sénégal (UVS)', lat: 14.7133, lng: -17.4550, city: 'Dakar' },
  { id: 'uamo', name: 'Université Amadou Mahtar Mbow (UAM)', lat: 14.7640, lng: -17.3050, city: 'Diamniadio' },
  { id: 'uadb_kolda', name: 'Université du Sine-Saloum El Hadj Ibrahima Niass (USSEIN)', lat: 14.3571, lng: -16.4145, city: 'Kaolack' },
  { id: 'utz', name: 'Université Iba Der Thiam de Thiès (UIT)', lat: 14.7833, lng: -16.9667, city: 'Thiès' }
];


  // Types de Nescafé
  const nescafeTypes = [
    
    { id: 'frappe', name: 'Nescafé Frappé' },
    { id: 'cold', name: 'Nescafé Cold' },
    { id: 'chaud', name: 'Nescafé Chaud' }
  ];

  // Options de feedback
  const feedbackOptions = [
    { id: 'excellent', name: 'Excellent', emoji: '⭐' },
    { id: 'tres_bon', name: 'Très bon', emoji: '😊' },
    { id: 'bon', name: 'Bon', emoji: '🙂' },
    { id: 'moyen', name: 'Moyen', emoji: '😐' },
    { id: 'decevant', name: 'Décevant', emoji: '😞' }
  ];

  // Options d'intention d'achat
  const purchaseIntentOptions = [
    { id: 'definitivement', name: 'Définitivement', value: 100 },
    { id: 'probablement', name: 'Probablement', value: 75 },
    { id: 'peut_etre', name: 'Peut-être', value: 50 },
    { id: 'probablement_pas', name: 'Probablement pas', value: 25 },
    { id: 'definitivement_pas', name: 'Définitivement pas', value: 0 }
  ];

  const [filters, setFilters] = useState({
    location: 'all',
    product: 'all',
    dateRange: 'today',
    startDate: '',
    endDate: '',
    feedback: 'all'
  });

  // Géolocalisation automatique
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // Trouver le site le plus proche
          let closestSite = availableSites[0];
          let minDistance = Number.MAX_VALUE;
          
          availableSites.forEach(site => {
            const distance = Math.sqrt(
              Math.pow(site.lat - latitude, 2) + Math.pow(site.lng - longitude, 2)
            );
            if (distance < minDistance) {
              minDistance = distance;
              closestSite = site;
            }
          });
          
          setFormData(prev => ({
            ...prev,
            site: closestSite.id,
            location: `${closestSite.name} (${closestSite.city})`
          }));
        },
        (error) => {
          console.error('Erreur de géolocalisation:', error);
          // Site par défaut en cas d'erreur
          setFormData(prev => ({
            ...prev,
            site: 'ucad',
            location: 'UCAD Campus (Dakar)'
          }));
        }
      );
    } else {
      // Fallback si la géolocalisation n'est pas supportée
      setFormData(prev => ({
        ...prev,
        site: 'ucad',
        location: 'UCAD Campus (Dakar)'
      }));
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newSubmission = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...formData,
      siteName: availableSites.find(s => s.id === formData.site)?.name || 'Inconnu',
      nescafeTypeName: nescafeTypes.find(t => t.id === formData.nescafeType)?.name || 'Inconnu',
      feedbackName: feedbackOptions.find(f => f.id === formData.feedback)?.name || 'Inconnu',
      purchaseIntentName: purchaseIntentOptions.find(p => p.id === formData.purchaseIntent)?.name || 'Inconnu',
      purchaseIntentValue: purchaseIntentOptions.find(p => p.id === formData.purchaseIntent)?.value || 0
    };
    
    const updatedSubmissions = [...submissions, newSubmission];
    setSubmissions(updatedSubmissions);
    localStorage.setItem('nescafeSubmissions', JSON.stringify(updatedSubmissions));
    
    // Réinitialiser le formulaire (sauf la localisation)
    setFormData({
      site: formData.site,
      coffeeAdepte: '',
      wantNescafe: '',
      nescafeType: '',
      nescafeAdepte: '',
      feedback: '',
      purchaseIntent: '',
      firstName: '',
      lastName: '',
      whatsapp: '',
      age: '',
      gender: '',
      location: formData.location
    });
    
    alert('Formulaire soumis avec succès !');
  };

  // Calcul des données pour le dashboard
  const calculateDashboardData = () => {
    const today = new Date().toDateString();
    const todaySubmissions = submissions.filter(sub => 
      new Date(sub.timestamp).toDateString() === today
    );

    // NOUVEAUX CALCULS
    const totalSamples = todaySubmissions.length;
    const coffeeAdeptes = todaySubmissions.filter(sub => sub.coffeeAdepte === 'oui').length;
    const spontaneousNescafe = todaySubmissions.filter(sub => sub.wantNescafe === 'oui').length;
    const convertedNescafe = todaySubmissions.filter(sub => sub.wantNescafe === 'non' && sub.nescafeAdepte === 'oui').length;
    const nescafeAdeptes = todaySubmissions.filter(sub => sub.nescafeAdepte === 'oui').length;
    
    // Taux de conversion (personnes convaincues)
    const conversionRate = totalSamples > 0 ? Math.round((convertedNescafe / totalSamples) * 100) : 0;
    
    // Taux d'engagement global (adeptes Nescafé parmi tous)
    const engagementRate = totalSamples > 0 ? Math.round((nescafeAdeptes / totalSamples) * 100) : 0;
    
    // Taux d'engagement parmi les adeptes du café
    const engagementAmongCoffeeAdeptes = coffeeAdeptes > 0 ? 
      Math.round((todaySubmissions.filter(sub => sub.coffeeAdepte === 'oui' && sub.nescafeAdepte === 'oui').length / coffeeAdeptes) * 100) : 0;

    // Données par site
    const siteData = availableSites.map(site => {
      const siteSubmissions = todaySubmissions.filter(sub => sub.site === site.id);
      const siteTotal = siteSubmissions.length;
      const siteCoffeeAdeptes = siteSubmissions.filter(sub => sub.coffeeAdepte === 'oui').length;
      const siteNescafeAdeptes = siteSubmissions.filter(sub => sub.nescafeAdepte === 'oui').length;
      const siteConverted = siteSubmissions.filter(sub => sub.wantNescafe === 'non' && sub.nescafeAdepte === 'oui').length;
      
      const siteEngagement = siteTotal > 0 ? Math.round((siteNescafeAdeptes / siteTotal) * 100) : 0;
      const siteConversion = siteTotal > 0 ? Math.round((siteConverted / siteTotal) * 100) : 0;

      // Calcul du stock basé sur l'activité (simulé)
      const baseStock = 100;
      const stockUsed = Math.min(siteTotal * 0.5, baseStock);
      const currentStock = Math.max(0, baseStock - stockUsed);
      const stockPercentage = Math.round((currentStock / baseStock) * 100);

      return {
        id: site.id,
        name: site.name,
        samples: siteTotal,
        engagement: siteEngagement,
        conversion: siteConversion,
        coffeeAdeptes: siteCoffeeAdeptes,
        nescafeAdeptes: siteNescafeAdeptes,
        converted: siteConverted,
        stock: stockPercentage,
        city: site.city,
        submissions: siteSubmissions
      };
    });

    // Données par produit
    const productData = nescafeTypes.map(product => {
      const productSubmissions = todaySubmissions.filter(sub => sub.nescafeType === product.id);
      return {
        name: product.name,
        value: productSubmissions.length,
        color: getProductColor(product.id),
        id: product.id
      };
    }).filter(prod => prod.value > 0);

    // Données de feedback
    const feedbackData = feedbackOptions.map(fb => {
      const fbSubmissions = todaySubmissions.filter(sub => sub.feedback === fb.id);
      return {
        type: fb.name,
        value: fbSubmissions.length,
        color: getFeedbackColor(fb.id),
        id: fb.id,
        emoji: fb.emoji
      };
    }).filter(fb => fb.value > 0);

    // Données d'intention d'achat
    const purchaseIntentData = purchaseIntentOptions.map(intent => {
      const intentSubmissions = todaySubmissions.filter(sub => sub.purchaseIntent === intent.id);
      return {
        type: intent.name,
        value: intentSubmissions.length,
        color: getIntentColor(intent.id),
        id: intent.id,
        score: intent.value
      };
    }).filter(intent => intent.value > 0);

    // Données de conversion
    const conversionData = [
      { name: 'Demande spontanée', value: spontaneousNescafe, color: '#10B981' },
      { name: 'Personnes convaincues', value: convertedNescafe, color: '#3B82F6' },
      { name: 'Non convaincues', value: totalSamples - spontaneousNescafe - convertedNescafe, color: '#EF4444' }
    ];

    // Données horaires
    const hourlyData = Array.from({ length: 12 }, (_, i) => {
      const hour = i + 8; // De 8h à 19h
      const hourSubmissions = todaySubmissions.filter(sub => {
        const subHour = new Date(sub.timestamp).getHours();
        return subHour === hour;
      });
      
      const hourData = { hour: `${hour}h`, samples: hourSubmissions.length };
      
      // Ajouter les données par produit pour cette heure
      nescafeTypes.forEach(product => {
        hourData[product.id] = hourSubmissions.filter(sub => sub.nescafeType === product.id).length;
      });
      
      return hourData;
    });

    // Intention d'achat moyenne
    const avgPurchaseIntent = totalSamples > 0 ? 
      Math.round(todaySubmissions.reduce((sum, sub) => sum + (sub.purchaseIntentValue || 0), 0) / totalSamples) : 0;

    return {
      siteData,
      productData,
      feedbackData,
      purchaseIntentData,
      conversionData,
      hourlyData,
      totalSamples,
      coffeeAdeptes,
      spontaneousNescafe,
      convertedNescafe,
      nescafeAdeptes,
      engagementRate,
      conversionRate,
      engagementAmongCoffeeAdeptes,
      avgPurchaseIntent,
      todaySubmissions
    };
  };

  // Couleurs pour les produits
  const getProductColor = (productId) => {
    const colors = {
      latte: '#8B4513',
      frappe: '#4169E1',
      cold: '#1E90FF',
      chaud: '#DC143C',
      '3en1': '#DAA520',
      gold: '#FFD700',
      classic: '#A0522D'
    };
    return colors[productId] || '#8884d8';
  };

  // Couleurs pour le feedback
  const getFeedbackColor = (feedbackId) => {
    const colors = {
      excellent: '#10B981',
      tres_bon: '#34D399',
      bon: '#FCD34D',
      moyen: '#F59E0B',
      decevant: '#EF4444'
    };
    return colors[feedbackId] || '#8884d8';
  };

  // Couleurs pour l'intention d'achat
  const getIntentColor = (intentId) => {
    const colors = {
      definitivement: '#10B981',
      probablement: '#34D399',
      peut_etre: '#FCD34D',
      probablement_pas: '#F59E0B',
      definitivement_pas: '#EF4444'
    };
    return colors[intentId] || '#8884d8';
  };

  const dashboardData = calculateDashboardData();

  // Fonction de filtrage pour le dashboard
  const getFilteredData = () => {
    let { siteData, productData, feedbackData, purchaseIntentData, conversionData } = dashboardData;

    if (filters.location !== 'all') {
      siteData = siteData.filter(loc => loc.id === filters.location);
    }

    if (filters.product !== 'all') {
      productData = productData.filter(prod => prod.id === filters.product);
    }

    if (filters.feedback !== 'all') {
      feedbackData = feedbackData.filter(fb => fb.id === filters.feedback);
    }

    return { siteData, productData, feedbackData, purchaseIntentData, conversionData };
  };

  const { siteData, productData, feedbackData, purchaseIntentData, conversionData } = getFilteredData();

  // Fonctions de téléchargement
  const downloadCSV = (dataType) => {
    let csvContent = '';
    let filename = '';

    if (dataType === 'summary') {
      csvContent = 'Site,Dégustations,Adeptes Café,Adeptes Nescafé,Convaincus,Engagement (%),Conversion (%)\n';
      siteData.forEach(loc => {
        csvContent += `${loc.name},${loc.samples},${loc.coffeeAdeptes},${loc.nescafeAdeptes},${loc.converted},${loc.engagement},${loc.conversion}\n`;
      });
      filename = `nescafe_summary_${new Date().toISOString().split('T')[0]}.csv`;
    } else if (dataType === 'products') {
      csvContent = 'Produit,Nombre de dégustations\n';
      productData.forEach(prod => {
        csvContent += `${prod.name},${prod.value}\n`;
      });
      filename = `nescafe_products_${new Date().toISOString().split('T')[0]}.csv`;
    } else if (dataType === 'detailed') {
      csvContent = 'ID,Date & Heure,Site,Adepte Café,Demande Nescafé,Produit,Adepte Nescafé,Feedback,Intention Achat,Prénom,Nom,WhatsApp,Âge,Genre\n';
      dashboardData.todaySubmissions.forEach(row => {
        csvContent += `${row.id},${new Date(row.timestamp).toLocaleString('fr-FR')},${row.siteName},${row.coffeeAdepte},${row.wantNescafe},${row.nescafeTypeName},${row.nescafeAdepte},${row.feedbackName},${row.purchaseIntentName},${row.firstName},${row.lastName},${row.whatsapp},${row.age},${row.gender}\n`;
      });
      filename = `nescafe_detailed_${new Date().toISOString().split('T')[0]}.csv`;
    }

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetFilters = () => {
    setFilters({
      location: 'all',
      product: 'all',
      dateRange: 'today',
      startDate: '',
      endDate: '',
      feedback: 'all'
    });
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, color }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2" style={{ color }}>{value}</p>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
        <Icon className="h-12 w-12 opacity-20" style={{ color }} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-6">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-xl font-bold mb-2">☕ Nescafé Sampling Tour - Dakar</h1>
            <p className="text-red-100">Système de collecte et analyse en temps réel</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-1">
              <Clock className="h-5 w-5" />
              <span className="text-xl font-mono">{currentTime.toLocaleTimeString('fr-FR')}</span>
            </div>
            <p className="text-sm text-red-100">{currentTime.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>

      {/* Navigation par onglets */}
      <div className="bg-white rounded-lg shadow-lg p-2 mb-6">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-6 py-3 font-medium rounded-t-lg transition-colors ${
              activeTab === 'dashboard'
                ? 'bg-red-600 text-white'
                : 'text-gray-600 hover:text-red-600'
            }`}
          >
            <TrendingUp className="h-5 w-5" />
            Tableau de Bord
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`flex items-center gap-2 px-6 py-3 font-medium rounded-t-lg transition-colors ${
              activeTab === 'form'
                ? 'bg-red-600 text-white'
                : 'text-gray-600 hover:text-red-600'
            }`}
          >
            <FormInput className="h-5 w-5" />
            Formulaire de Collecte
          </button>
        </div>
      </div>

      {/* Contenu des onglets */}
      {activeTab === 'dashboard' && (
        <>
          {/* Filtres et exports */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Filter className="h-5 w-5" />
                {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
              </button>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => downloadCSV('summary')}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <Download className="h-4 w-4" />
                  Résumé CSV
                </button>
                <button
                  onClick={() => downloadCSV('products')}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <Download className="h-4 w-4" />
                  Produits CSV
                </button>
                <button
                  onClick={() => downloadCSV('detailed')}
                  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                >
                  <Download className="h-4 w-4" />
                  Détails CSV
                </button>
              </div>
            </div>

            {/* Filtres avancés */}
            {showFilters && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Filtres Avancés</h3>
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                    Réinitialiser
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site
                    </label>
                    <select
                      value={filters.location}
                      onChange={(e) => setFilters({...filters, location: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="all">Tous les sites</option>
                      {availableSites.map(site => (
                        <option key={site.id} value={site.id}>{site.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Produit
                    </label>
                    <select
                      value={filters.product}
                      onChange={(e) => setFilters({...filters, product: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="all">Tous les produits</option>
                      {nescafeTypes.map(prod => (
                        <option key={prod.id} value={prod.id}>{prod.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Feedback
                    </label>
                    <select
                      value={filters.feedback}
                      onChange={(e) => setFilters({...filters, feedback: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="all">Tous les feedbacks</option>
                      {feedbackOptions.map(fb => (
                        <option key={fb.id} value={fb.id}>{fb.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Période
                    </label>
                    <select
                      value={filters.dateRange}
                      onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="today">Aujourd'hui</option>
                      <option value="yesterday">Hier</option>
                      <option value="week">Cette semaine</option>
                      <option value="month">Ce mois</option>
                    </select>
                  </div>
                </div>

                {/* Filtres actifs */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {filters.location !== 'all' && (
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      Site: {availableSites.find(l => l.id === filters.location)?.name}
                    </span>
                  )}
                  {filters.product !== 'all' && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Produit: {nescafeTypes.find(p => p.id === filters.product)?.name}
                    </span>
                  )}
                  {filters.feedback !== 'all' && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Feedback: {feedbackOptions.find(f => f.id === filters.feedback)?.name}
                    </span>
                  )}
                  {filters.dateRange !== 'today' && (
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      Période: {filters.dateRange}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* NOUVELLES CARTES DE STATISTIQUES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              icon={Coffee}
              title="Dégustations Total"
              value={dashboardData.totalSamples}
              subtitle={`${dashboardData.coffeeAdeptes} adeptes café`}
              color="#8B4513"
            />
            <StatCard
              icon={Users}
              title="Taux d'Engagement"
              value={`${dashboardData.engagementRate}%`}
              subtitle={`${dashboardData.nescafeAdeptes} adeptes Nescafé`}
              color="#10B981"
            />
            <StatCard
              icon={Target}
              title="Taux de Conversion"
              value={`${dashboardData.conversionRate}%`}
              subtitle={`${dashboardData.convertedNescafe} personnes convaincues`}
              color="#3B82F6"
            />
            <StatCard
              icon={TrendingUp}
              title="Intention d'Achat Moy."
              value={`${dashboardData.avgPurchaseIntent}%`}
              subtitle="Score moyen de conversion"
              color="#F59E0B"
            />
          </div>

          {/* Graphiques de conversion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Distribution par produit */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Distribution par Produit
                {filters.product !== 'all' && (
                  <span className="text-sm font-normal text-gray-500 ml-2">(filtré)</span>
                )}
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={productData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {productData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Performance de conversion */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Performance de Conversion
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={conversionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {conversionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Performances par site */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-red-600" />
              Performances par Site
              {filters.location !== 'all' && (
                <span className="text-sm font-normal text-gray-500">(filtré)</span>
              )}
            </h2>
            <div className="space-y-4">
              {siteData.map(location => (
                <div key={location.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{location.name}</h3>
                      <p className="text-sm text-gray-500">
                        {location.samples} dégustations • 
                        {location.coffeeAdeptes} adeptes café • 
                        {location.nescafeAdeptes} adeptes Nescafé
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Engagement</p>
                        <p className={`text-xl font-bold ${location.engagement > 85 ? 'text-green-600' : location.engagement > 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {location.engagement}%
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Conversion</p>
                        <p className={`text-xl font-bold ${location.conversion > 30 ? 'text-green-600' : location.conversion > 15 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {location.conversion}%
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(location.samples / 100) * 100}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Convaincus: {location.converted}</span>
                    <span>Demande spontanée: {location.samples - location.converted}</span>
                  </div>
                  
                  {location.stock < 50 && (
                    <div className="mt-2 flex items-center gap-2 text-orange-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>Stock faible - réapprovisionnement recommandé</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Autres graphiques */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Feedback consommateurs */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Feedback Consommateurs
                {filters.feedback !== 'all' && (
                  <span className="text-sm font-normal text-gray-500 ml-2">(filtré)</span>
                )}
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={feedbackData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8B4513">
                    {feedbackData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Intention d'achat */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Intention d'Achat</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={purchaseIntentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8B4513">
                    {purchaseIntentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Évolution horaire */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Évolution Horaire des Dégustations</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dashboardData.hourlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="samples" stroke="#DC2626" strokeWidth={3} name="Total Dégustations" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Insights */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6 rounded-lg">
            <div className="flex items-start">
              <Award className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">🎯 Insights & Recommandations</h3>
                <ul className="space-y-2 text-sm text-yellow-900">
                  <li>✅ {dashboardData.convertedNescafe} personnes convaincues sur le terrain</li>
                  <li>📊 Taux de conversion: {dashboardData.conversionRate}% - {dashboardData.conversionRate > 25 ? 'Excellent!' : 'Peut être amélioré'}</li>
                  <li>⭐ Engagement Nescafé parmi adeptes café: {dashboardData.engagementAmongCoffeeAdeptes}%</li>
                  <li>💰 Intention d'achat moyenne: {dashboardData.avgPurchaseIntent}% - ROI prédictif positif</li>
                  <li>📈 {dashboardData.totalSamples} dégustations aujourd'hui</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'form' && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <FormInput className="h-6 w-6 text-red-600" />
            Formulaire de Collecte Nescafé
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Site (auto GPS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  📍 Site (Détection automatique)
                </label>
                <select
                  name="site"
                  value={formData.site}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez un site</option>
                  {availableSites.map(site => (
                    <option key={site.id} value={site.id}>
                      {site.name} - {site.city}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Localisation détectée: {formData.location || 'En cours...'}
                </p>
              </div>

              {/* NOUVEAU: Adepte du café en général */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ☕ Prenez-vous du Café souvent ?
                </label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="coffeeAdepte"
                      value="oui"
                      checked={formData.coffeeAdepte === 'oui'}
                      onChange={handleInputChange}
                      className="text-red-600 focus:ring-red-500"
                      required
                    />
                    <span className="ml-2">Oui</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="coffeeAdepte"
                      value="non"
                      checked={formData.coffeeAdepte === 'non'}
                      onChange={handleInputChange}
                      className="text-red-600 focus:ring-red-500"
                      required
                    />
                    <span className="ml-2">Non</span>
                  </label>
                </div>
              </div>
            </div>

            {/* NOUVEAU: Demande spontanée de Nescafé */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🎯 Souhaitez-vous goûter du Nescafé ?
              </label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="wantNescafe"
                    value="oui"
                    checked={formData.wantNescafe === 'oui'}
                    onChange={handleInputChange}
                    className="text-red-600 focus:ring-red-500"
                    required
                  />
                  <span className="ml-2">Oui</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="wantNescafe"
                    value="non"
                    checked={formData.wantNescafe === 'non'}
                    onChange={handleInputChange}
                    className="text-red-600 focus:ring-red-500"
                    required
                  />
                  <span className="ml-2">Non</span>
                </label>
              </div>
            </div>

            {/* Type de Nescafé (conditionnel) */}
            {formData.wantNescafe && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ☕ Type de Nescafé servi
                </label>
                <select
                  name="nescafeType"
                  value={formData.nescafeType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez un type</option>
                  {nescafeTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Adepte Nescafé (conditionnel) */}
            {formData.nescafeType && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ⭐ Après dégustation, seriez-vous adepte de Nescafé ?
                </label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="nescafeAdepte"
                      value="oui"
                      checked={formData.nescafeAdepte === 'oui'}
                      onChange={handleInputChange}
                      className="text-red-600 focus:ring-red-500"
                      required
                    />
                    <span className="ml-2">Oui</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="nescafeAdepte"
                      value="non"
                      checked={formData.nescafeAdepte === 'non'}
                      onChange={handleInputChange}
                      className="text-red-600 focus:ring-red-500"
                      required
                    />
                    <span className="ml-2">Non</span>
                  </label>
                </div>
              </div>
            )}

            {/* Feedback (conditionnel) */}
            {formData.nescafeAdepte && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  💬 Feedback sur la dégustation
                </label>
                <select
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez votre avis</option>
                  {feedbackOptions.map(fb => (
                    <option key={fb.id} value={fb.id}>
                      {fb.emoji} {fb.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Intention d'achat (conditionnel) */}
            {formData.feedback && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🎯 Intention d'achat future
                </label>
                <select
                  name="purchaseIntent"
                  value={formData.purchaseIntent}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez votre intention</option>
                  {purchaseIntentOptions.map(intent => (
                    <option key={intent.id} value={intent.id}>
                      {intent.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Informations personnelles */}
            {formData.purchaseIntent && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      👤 Prénom
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      👥 Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      📱 WhatsApp (optionnel)
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="+221 XX XXX XX XX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      🎂 Âge (optionnel)
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      min="16"
                      max="80"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      👫 Genre (optionnel)
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-end pt-6 border-t">
              <button
                type="submit"
                disabled={!formData.purchaseIntent}
                className={`px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
                  formData.purchaseIntent
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <CheckCircle className="h-5 w-5" />
                {formData.purchaseIntent ? 'Soumettre le Formulaire' : 'Répondez à toutes les questions'}
              </button>
            </div>
          </form>

        
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              📊 Résumé des collectes aujourd'hui: {dashboardData.todaySubmissions.length} dégustations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold text-red-600">{dashboardData.coffeeAdeptes}</p>
                <p className="text-gray-600">Adeptes café</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-green-600">{dashboardData.nescafeAdeptes}</p>
                <p className="text-gray-600">Adeptes Nescafé</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-600">{dashboardData.convertedNescafe}</p>
                <p className="text-gray-600">Personnes convaincues</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-purple-600">{dashboardData.conversionRate}%</p>
                <p className="text-gray-600">Taux de conversion</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
/* import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapPin, Users, Coffee, TrendingUp, Clock, Award, AlertCircle, Filter, Download, Calendar, X } from 'lucide-react';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: 'all',
    product: 'all',
    dateRange: 'today',
    startDate: '',
    endDate: '',
    feedback: 'all'
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Données simulées en temps réel
  const allLocations = [
    { id: 'dakar_plateau', name: 'Dakar Plateau', samples: 342, engagement: 89, stock: 65, city: 'Dakar' },
    { id: 'ucad', name: 'UCAD Campus', samples: 521, engagement: 94, stock: 45, city: 'Dakar' },
    { id: 'sandaga', name: 'Marché Sandaga', samples: 289, engagement: 76, stock: 80, city: 'Dakar' },
    { id: 'almadies', name: 'Almadies', samples: 178, engagement: 82, stock: 90, city: 'Dakar' }
  ];

  const allProductData = [
    { name: 'Nescafé 3en1', value: 450, color: '#8B4513', id: '3en1' },
    { name: 'Nescafé Gold', value: 320, color: '#DAA520', id: 'gold' },
    { name: 'Nescafé Ice', value: 280, color: '#4169E1', id: 'ice' },
    { name: 'Nescafé Classic', value: 280, color: '#A0522D', id: 'classic' }
  ];

  const allHourlyData = [
    { hour: '8h', samples: 45, '3en1': 15, 'gold': 12, 'ice': 10, 'classic': 8 },
    { hour: '9h', samples: 89, '3en1': 30, 'gold': 25, 'ice': 20, 'classic': 14 },
    { hour: '10h', samples: 134, '3en1': 45, 'gold': 35, 'ice': 30, 'classic': 24 },
    { hour: '11h', samples: 198, '3en1': 68, 'gold': 50, 'ice': 45, 'classic': 35 },
    { hour: '12h', samples: 245, '3en1': 85, 'gold': 65, 'ice': 55, 'classic': 40 },
    { hour: '13h', samples: 267, '3en1': 92, 'gold': 70, 'ice': 60, 'classic': 45 },
    { hour: '14h', samples: 289, '3en1': 98, 'gold': 75, 'ice': 68, 'classic': 48 },
    { hour: '15h', samples: 198, '3en1': 68, 'gold': 52, 'ice': 45, 'classic': 33 }
  ];

  const allFeedbackData = [
    { type: 'Très positif', value: 65, color: '#10B981', id: 'very_positive' },
    { type: 'Positif', value: 25, color: '#34D399', id: 'positive' },
    { type: 'Neutre', value: 8, color: '#FCD34D', id: 'neutral' },
    { type: 'Négatif', value: 2, color: '#EF4444', id: 'negative' }
  ];

  // Données détaillées pour export
  const detailedData = [
    { id: 1, timestamp: '2025-10-30 08:15:23', location: 'UCAD Campus', product: 'Nescafé 3en1', animateur: 'Fatou Diop', feedback: 'Très positif', engagement: 'Oui', email: 'f.diop@example.com' },
    { id: 2, timestamp: '2025-10-30 08:18:45', location: 'Dakar Plateau', product: 'Nescafé Gold', animateur: 'Mamadou Sall', feedback: 'Positif', engagement: 'Non', email: '' },
    { id: 3, timestamp: '2025-10-30 08:22:10', location: 'UCAD Campus', product: 'Nescafé Ice', animateur: 'Fatou Diop', feedback: 'Très positif', engagement: 'Oui', email: 'a.ndiaye@example.com' },
    { id: 4, timestamp: '2025-10-30 08:25:33', location: 'Marché Sandaga', product: 'Nescafé 3en1', animateur: 'Ibrahima Ba', feedback: 'Positif', engagement: 'Oui', email: 'i.ba@example.com' },
    { id: 5, timestamp: '2025-10-30 08:30:12', location: 'Almadies', product: 'Nescafé Classic', animateur: 'Aissatou Sy', feedback: 'Neutre', engagement: 'Non', email: '' }
  ];

  // Fonction de filtrage
  const getFilteredData = () => {
    let locations = [...allLocations];
    let productData = [...allProductData];
    let feedbackData = [...allFeedbackData];

    if (filters.location !== 'all') {
      locations = locations.filter(loc => loc.id === filters.location);
    }

    if (filters.product !== 'all') {
      productData = productData.filter(prod => prod.id === filters.product);
    }

    if (filters.feedback !== 'all') {
      feedbackData = feedbackData.filter(fb => fb.id === filters.feedback);
    }

    return { locations, productData, feedbackData };
  };

  const { locations, productData, feedbackData } = getFilteredData();

  const totalSamples = locations.reduce((sum, loc) => sum + loc.samples, 0);
  const avgEngagement = locations.length > 0 
    ? Math.round(locations.reduce((sum, loc) => sum + loc.engagement, 0) / locations.length)
    : 0;

  // Fonction de téléchargement CSV
  const downloadCSV = (dataType) => {
    let csvContent = '';
    let filename = '';

    if (dataType === 'summary') {
      csvContent = 'Site,Dégustations,Engagement (%),Stock (%)\n';
      locations.forEach(loc => {
        csvContent += `${loc.name},${loc.samples},${loc.engagement},${loc.stock}\n`;
      });
      filename = `nescafe_summary_${new Date().toISOString().split('T')[0]}.csv`;
    } else if (dataType === 'products') {
      csvContent = 'Produit,Nombre de dégustations\n';
      productData.forEach(prod => {
        csvContent += `${prod.name},${prod.value}\n`;
      });
      filename = `nescafe_products_${new Date().toISOString().split('T')[0]}.csv`;
    } else if (dataType === 'detailed') {
      csvContent = 'ID,Date & Heure,Site,Produit,Animateur,Feedback,Engagement,Email\n';
      detailedData.forEach(row => {
        csvContent += `${row.id},${row.timestamp},${row.location},${row.product},${row.animateur},${row.feedback},${row.engagement},${row.email}\n`;
      });
      filename = `nescafe_detailed_${new Date().toISOString().split('T')[0]}.csv`;
    } else if (dataType === 'feedback') {
      csvContent = 'Type Feedback,Nombre,Pourcentage\n';
      const total = feedbackData.reduce((sum, fb) => sum + fb.value, 0);
      feedbackData.forEach(fb => {
        const percentage = total > 0 ? ((fb.value / total) * 100).toFixed(1) : 0;
        csvContent += `${fb.type},${fb.value},${percentage}%\n`;
      });
      filename = `nescafe_feedback_${new Date().toISOString().split('T')[0]}.csv`;
    }

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Téléchargement Excel (JSON pour Excel)
  const downloadExcel = () => {
    const excelData = {
      'Résumé par Site': locations.map(loc => ({
        'Site': loc.name,
        'Dégustations': loc.samples,
        'Engagement (%)': loc.engagement,
        'Stock (%)': loc.stock
      })),
      'Produits': productData.map(prod => ({
        'Produit': prod.name,
        'Dégustations': prod.value
      })),
      'Feedback': feedbackData.map(fb => ({
        'Type': fb.type,
        'Nombre': fb.value
      })),
      'Données Détaillées': detailedData
    };

    const dataStr = JSON.stringify(excelData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `nescafe_complete_data_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const resetFilters = () => {
    setFilters({
      location: 'all',
      product: 'all',
      dateRange: 'today',
      startDate: '',
      endDate: '',
      feedback: 'all'
    });
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, color }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2" style={{ color }}>{value}</p>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
        <Icon className="h-12 w-12 opacity-20" style={{ color }} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-6">
     
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-xl font-bold mb-2">☕ Nescafé Sampling Tour - Dashboard Live</h1>
            <p className="text-red-100">Données en temps réel - Dakar, Sénégal</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-1">
              <Clock className="h-5 w-5" />
              <span className="text-xl font-mono">{currentTime.toLocaleTimeString('fr-FR')}</span>
            </div>
            <p className="text-sm text-red-100">{currentTime.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>

     
      <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Filter className="h-5 w-5" />
            {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
          </button>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => downloadCSV('summary')}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              Résumé CSV
            </button>
            <button
              onClick={() => downloadCSV('products')}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              Produits CSV
            </button>
            <button
              onClick={() => downloadCSV('detailed')}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              Détails CSV
            </button>
            <button
              onClick={downloadExcel}
              className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              Export Complet JSON
            </button>
          </div>
        </div>

        
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Filtres Avancés</h3>
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
              >
                <X className="h-4 w-4" />
                Réinitialiser
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
           
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Site
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="all">Tous les sites</option>
                  {allLocations.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              </div>

           
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Produit
                </label>
                <select
                  value={filters.product}
                  onChange={(e) => setFilters({...filters, product: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="all">Tous les produits</option>
                  {allProductData.map(prod => (
                    <option key={prod.id} value={prod.id}>{prod.name}</option>
                  ))}
                </select>
              </div>

             
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Feedback
                </label>
                <select
                  value={filters.feedback}
                  onChange={(e) => setFilters({...filters, feedback: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="all">Tous les feedbacks</option>
                  {allFeedbackData.map(fb => (
                    <option key={fb.id} value={fb.id}>{fb.type}</option>
                  ))}
                </select>
              </div>

             
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Période
                </label>
                <select
                  value={filters.dateRange}
                  onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="today">Aujourd'hui</option>
                  <option value="yesterday">Hier</option>
                  <option value="week">Cette semaine</option>
                  <option value="month">Ce mois</option>
                  <option value="custom">Personnalisée</option>
                </select>
              </div>

             
              {filters.dateRange === 'custom' && (
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dates
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={filters.startDate}
                      onChange={(e) => setFilters({...filters, startDate: e.target.value})}
                      className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="date"
                      value={filters.endDate}
                      onChange={(e) => setFilters({...filters, endDate: e.target.value})}
                      className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            
            <div className="mt-3 flex flex-wrap gap-2">
              {filters.location !== 'all' && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Site: {allLocations.find(l => l.id === filters.location)?.name}
                </span>
              )}
              {filters.product !== 'all' && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Produit: {allProductData.find(p => p.id === filters.product)?.name}
                </span>
              )}
              {filters.feedback !== 'all' && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Feedback: {allFeedbackData.find(f => f.id === filters.feedback)?.type}
                </span>
              )}
              {filters.dateRange !== 'today' && (
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Période: {filters.dateRange === 'custom' ? `${filters.startDate} → ${filters.endDate}` : filters.dateRange}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          icon={Coffee}
          title="Dégustations Totales"
          value={totalSamples}
          subtitle={filters.location !== 'all' || filters.product !== 'all' ? 'Filtrées' : 'Aujourd\'hui'}
          color="#8B4513"
        />
        <StatCard
          icon={Users}
          title="Taux d'Engagement"
          value={`${avgEngagement}%`}
          subtitle="Moyenne des sites"
          color="#10B981"
        />
        <StatCard
          icon={MapPin}
          title="Sites Actifs"
          value={locations.length}
          subtitle={filters.location !== 'all' ? 'Filtrés' : 'En cours'}
          color="#3B82F6"
        />
        <StatCard
          icon={TrendingUp}
          title="Objectif Journalier"
          value={`${Math.round((totalSamples / 2000) * 100)}%`}
          subtitle={`${totalSamples} / 2000`}
          color="#F59E0B"
        />
      </div>

   
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-red-600" />
          Performances par Site
          {filters.location !== 'all' && (
            <span className="text-sm font-normal text-gray-500">(filtré)</span>
          )}
        </h2>
        <div className="space-y-4">
          {locations.map(location => (
            <div key={location.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{location.name}</h3>
                  <p className="text-sm text-gray-500">{location.samples} dégustations</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Engagement</p>
                    <p className={`text-xl font-bold ${location.engagement > 85 ? 'text-green-600' : location.engagement > 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {location.engagement}%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Stock</p>
                    <p className={`text-xl font-bold ${location.stock > 60 ? 'text-green-600' : location.stock > 30 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {location.stock}%
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(location.samples / 600) * 100}%` }}
                />
              </div>
              
              {location.stock < 50 && (
                <div className="mt-2 flex items-center gap-2 text-orange-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>Stock faible - réapprovisionnement recommandé</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Distribution par Produit
            {filters.product !== 'all' && (
              <span className="text-sm font-normal text-gray-500 ml-2">(filtré)</span>
            )}
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Feedback Consommateurs
            {filters.feedback !== 'all' && (
              <span className="text-sm font-normal text-gray-500 ml-2">(filtré)</span>
            )}
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={feedbackData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8B4513">
                {feedbackData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Évolution Horaire des Dégustations</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={allHourlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="samples" stroke="#DC2626" strokeWidth={3} name="Total Dégustations" />
          </LineChart>
        </ResponsiveContainer>
      </div>

     
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6 rounded-lg">
        <div className="flex items-start">
          <Award className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">🎯 Insights & Recommandations</h3>
            <ul className="space-y-2 text-sm text-yellow-900">
              <li>✅ UCAD Campus performe excellemment - envisager d'étendre les horaires</li>
              <li>⚠️ Stock faible détecté à UCAD - réapprovisionnement urgent</li>
              <li>📈 Pic d'affluence entre 12h-14h - optimiser la présence d'animateurs</li>
              <li>⭐ Nescafé 3en1 est le produit le plus demandé - augmenter le stock</li>
              <li>📊 {totalSamples} dégustations aujourd'hui - objectif à {Math.round((totalSamples/2000)*100)}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;  */
/* 
import React, { useState, useRef, useEffect } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ClipboardList, BarChart3, Store, User, CreditCard, DollarSign, CheckCircle, Download, Search, Filter, Trash2, Gift, GamepadIcon } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('formulaire');
  const [formData, setFormData] = useState({
    nomMagasin: '',
    localite: '',
    date: '',
    heure: '',
    prenom: '',
    nom: '',
    telephone: '',
    statutPuce: '',
    methodePaiement: '',
    autrePaiement: '',
    numeroTransaction: '',
    montant: '',
    referenceForfait: '',
    nomHotesse: '',
    observations: '',
    aJoue: '',
    aGagne: '',
    lotGagne: '',
    autreLot: ''
  });
  const [errors, setErrors] = useState({});
  const [submissions, setSubmissions] = useState([]);
  const [signatureData, setSignatureData] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const [filterDate, setFilterDate] = useState('');
  const [filterMagasin, setFilterMagasin] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('yas-submissions');
    if (saved) {
      setSubmissions(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (submissions.length > 0) {
      localStorage.setItem('yas-submissions', JSON.stringify(submissions));
    }
  }, [submissions]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nomMagasin) newErrors.nomMagasin = 'Nom du magasin requis';
    if (!formData.localite) newErrors.localite = 'Localité requise';
    if (!formData.date) newErrors.date = 'Date requise';
    if (!formData.heure) newErrors.heure = 'Heure requise';
    if (!formData.prenom) newErrors.prenom = 'Prénom requis';
    if (!formData.nom) newErrors.nom = 'Nom requis';
    if (!formData.telephone) newErrors.telephone = 'Téléphone requis';
    if (!formData.statutPuce) newErrors.statutPuce = 'Statut puce requis';
    if (!formData.methodePaiement) newErrors.methodePaiement = 'Méthode de paiement requise';
    if (!formData.numeroTransaction) newErrors.numeroTransaction = 'Numéro de transaction requis';
    if (!formData.montant) newErrors.montant = 'Montant requis';
    if (!formData.nomHotesse) newErrors.nomHotesse = 'Nom de l\'hôtesse requis';
    if (!formData.aJoue) newErrors.aJoue = 'Information jeu requise';
    if (formData.aJoue === 'oui' && !formData.aGagne) {
      newErrors.aGagne = 'Information gain requise';
    }
    if (formData.aGagne === 'oui' && !formData.lotGagne) {
      newErrors.lotGagne = 'Lot gagné requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newSubmission = {
        id: Date.now(),
        ...formData,
        signature: signatureData,
        dateSubmission: new Date().toISOString(),
        statut: 'complet'
      };
      setSubmissions(prev => [...prev, newSubmission]);
      
      setFormData({
        nomMagasin: '',
        localite: '',
        date: '',
        heure: '',
        prenom: '',
        nom: '',
        telephone: '',
        statutPuce: '',
        methodePaiement: '',
        autrePaiement: '',
        numeroTransaction: '',
        montant: '',
        referenceForfait: '',
        nomHotesse: '',
        observations: '',
        aJoue: '',
        aGagne: '',
        lotGagne: '',
        autreLot: ''
      });
      setSignatureData(null);
      clearCanvas();
      alert('Formulaire soumis avec succès!');
    }
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    setSignatureData(canvas.toDataURL());
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureData(null);
  };

  const totalActivations = submissions.length;
  
  const paymentMethods = submissions.reduce((acc, sub) => {
    const method = sub.methodePaiement;
    acc[method] = (acc[method] || 0) + 1;
    return acc;
  }, {});

  const paymentData = Object.entries(paymentMethods).map(([name, value]) => ({
    name: name === 'mix' ? 'Mix by YAS' : name === 'especes' ? 'Espèces' : name === 'carte' ? 'Carte' : 'Autre',
    value
  }));

  const puceStatus = submissions.reduce((acc, sub) => {
    acc[sub.statutPuce] = (acc[sub.statutPuce] || 0) + 1;
    return acc;
  }, {});

  const puceData = [
    { name: 'Nouvelle puce', value: puceStatus.nouvelle || 0 },
    { name: 'Ancienne puce', value: puceStatus.ancienne || 0 },
    { name: 'Aucune puce', value: puceStatus.aucune || 0 }
  ];

  const magasinStats = submissions.reduce((acc, sub) => {
    acc[sub.nomMagasin] = (acc[sub.nomMagasin] || 0) + 1;
    return acc;
  }, {});

  const topMagasins = Object.entries(magasinStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([name, value]) => ({ name, value }));

  const totalMontant = submissions.reduce((sum, sub) => sum + (parseFloat(sub.montant) || 0), 0);

  const jeuStats = submissions.reduce((acc, sub) => {
    acc.participation = acc.participation || { oui: 0, non: 0 };
    acc.participation[sub.aJoue] = (acc.participation[sub.aJoue] || 0) + 1;
    
    if (sub.aJoue === 'oui') {
      acc.gains = acc.gains || { oui: 0, non: 0 };
      acc.gains[sub.aGagne] = (acc.gains[sub.aGagne] || 0) + 1;
      
      if (sub.aGagne === 'oui' && sub.lotGagne) {
        const lot = sub.lotGagne === 'autre' ? sub.autreLot : sub.lotGagne;
        acc.lots = acc.lots || {};
        acc.lots[lot] = (acc.lots[lot] || 0) + 1;
      }
    }
    return acc;
  }, {});

  const participationData = [
    { name: 'A joué', value: jeuStats.participation?.oui || 0, color: '#00C49F' },
    { name: "N'a pas joué", value: jeuStats.participation?.non || 0, color: '#FF8042' }
  ];

  const gainsData = [
    { name: 'A gagné', value: jeuStats.gains?.oui || 0, color: '#FFD100' },
    { name: "N'a pas gagné", value: jeuStats.gains?.non || 0, color: '#00377D' }
  ];

  const lotsData = jeuStats.lots ? Object.entries(jeuStats.lots).map(([name, value]) => ({
    name: name === 'cadeau_surprise' ? 'Cadeau surprise' : 
          name === 'bon_reduction' ? 'Bon réduction' : 
          name === 'produit_yas' ? 'Produit YAS' : name,
    value
  })) : [];

  const COLORS = ['#00377D', '#FFD100', '#0088FE', '#00C49F', '#FFBB28'];

  const filteredSubmissions = submissions.filter(sub => {
    const matchDate = !filterDate || sub.date === filterDate;
    const matchMagasin = !filterMagasin || sub.nomMagasin.toLowerCase().includes(filterMagasin.toLowerCase());
    const matchSearch = !searchTerm || 
      sub.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.telephone.includes(searchTerm);
    return matchDate && matchMagasin && matchSearch;
  });

  const exportData = () => {
    const dataStr = JSON.stringify(filteredSubmissions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `yas-activations-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const deleteSubmission = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette activation?')) {
      setSubmissions(prev => prev.filter(sub => sub.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50"style={{ backgroundColor: '#FFD100', color: '#00377D' }} >
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #00377D 0%, #00509E 100%)' }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold" style={{ backgroundColor: '#FFD100', color: '#00377D' }}>
                YAS
              </div>
              <div>
                <h1 className="text-2xl font-bold">Système d'Activation YAS</h1>
                <p className="text-blue-200 text-sm">Auchan & Orca</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white border-b shadow-sm sticky top-0 z-10" style={{ borderTopColor: '#00377D' }}>
        <div className="container mx-auto px-4">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('formulaire')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all ${
                activeTab === 'formulaire'
                  ? 'border-b-4 text-blue-900'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
              style={activeTab === 'formulaire' ? { borderBottomColor: '#00377D' } : {}}
            >
              <ClipboardList size={20} />
              <span>Formulaire d'Activation</span>
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all ${
                activeTab === 'dashboard'
                  ? 'border-b-4 text-blue-900'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
              style={activeTab === 'dashboard' ? { borderBottomColor: '#00377D' } : {}}
            >
              <BarChart3 size={20} />
              <span>Dashboard & Données</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {activeTab === 'formulaire' ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 p-8" style={{ borderTopColor: '#00377D' }}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Store className="text-blue-900" size={24} />
                    <h2 className="text-xl font-bold text-gray-800">Informations Magasin</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom du magasin *</label>
                      <input
                        type="text"
                        name="nomMagasin"
                        value={formData.nomMagasin}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.nomMagasin ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Ex: Auchan Dakar"
                      />
                      {errors.nomMagasin && <p className="text-red-500 text-sm mt-1">{errors.nomMagasin}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Localité *</label>
                      <input
                        type="text"
                        name="localite"
                        value={formData.localite}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.localite ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Ex: Dakar"
                      />
                      {errors.localite && <p className="text-red-500 text-sm mt-1">{errors.localite}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Heure *</label>
                      <input
                        type="time"
                        name="heure"
                        value={formData.heure}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.heure ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.heure && <p className="text-red-500 text-sm mt-1">{errors.heure}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="text-blue-900" size={24} />
                    <h2 className="text-xl font-bold text-gray-800">Informations Client</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.prenom ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.nom ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.telephone ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="77 123 45 67"
                      />
                      {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Statut des puces YAS *</label>
                  <div className="space-y-2">
                    {[
                      { value: 'nouvelle', label: 'Client a acheté une nouvelle puce' },
                      { value: 'ancienne', label: 'Client avait déjà une puce YAS' },
                      { value: 'aucune', label: 'Aucune puce YAS' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition">
                        <input
                          type="radio"
                          name="statutPuce"
                          value={option.value}
                          checked={formData.statutPuce === option.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-900"
                        />
                        <span className="ml-3 text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.statutPuce && <p className="text-red-500 text-sm mt-1">{errors.statutPuce}</p>}
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <CreditCard className="text-blue-900" size={24} />
                    <label className="block text-sm font-medium text-gray-700">Méthode de paiement *</label>
                  </div>
                  <div className="space-y-2">
                    {[
                      { value: 'mix', label: 'Paiement via Application Mix by YAS' },
                      { value: 'especes', label: 'Paiement en espèces' },
                      { value: 'carte', label: 'Paiement par carte bancaire' },
                      { value: 'autre', label: 'Autre' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition">
                        <input
                          type="radio"
                          name="methodePaiement"
                          value={option.value}
                          checked={formData.methodePaiement === option.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-900"
                        />
                        <span className="ml-3 text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {formData.methodePaiement === 'autre' && (
                    <input
                      type="text"
                      name="autrePaiement"
                      value={formData.autrePaiement}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Précisez..."
                    />
                  )}
                  {errors.methodePaiement && <p className="text-red-500 text-sm mt-1">{errors.methodePaiement}</p>}
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <DollarSign className="text-blue-900" size={24} />
                    <h2 className="text-xl font-bold text-gray-800">Références de Paiement</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">N° Transaction *</label>
                      <input
                        type="text"
                        name="numeroTransaction"
                        value={formData.numeroTransaction}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.numeroTransaction ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.numeroTransaction && <p className="text-red-500 text-sm mt-1">{errors.numeroTransaction}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Montant (FCFA) *</label>
                      <input
                        type="number"
                        name="montant"
                        value={formData.montant}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.montant ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.montant && <p className="text-red-500 text-sm mt-1">{errors.montant}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Référence forfait</label>
                      <input
                        type="text"
                        name="referenceForfait"
                        value={formData.referenceForfait}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <GamepadIcon className="text-blue-900" size={24} />
                    <h2 className="text-xl font-bold text-gray-800">Jeu Client</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Le client a-t-il participé au jeu ? *
                      </label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { value: 'oui', label: 'Oui, le client a joué' },
                          { value: 'non', label: 'Non, le client n\'a pas joué' }
                        ].map(option => (
                          <label key={option.value} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                            <input
                              type="radio"
                              name="aJoue"
                              value={option.value}
                              checked={formData.aJoue === option.value}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-blue-900"
                            />
                            <span className="ml-3 text-gray-700 font-medium">{option.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.aJoue && <p className="text-red-500 text-sm mt-1">{errors.aJoue}</p>}
                    </div>

                    {formData.aJoue === 'oui' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Le client a-t-il gagné ? *
                          </label>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { value: 'oui', label: 'Oui, le client a gagné' },
                              { value: 'non', label: 'Non, le client n\'a pas gagné' }
                            ].map(option => (
                              <label key={option.value} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                                <input
                                  type="radio"
                                  name="aGagne"
                                  value={option.value}
                                  checked={formData.aGagne === option.value}
                                  onChange={handleInputChange}
                                  className="w-4 h-4 text-blue-900"
                                />
                                <span className="ml-3 text-gray-700 font-medium">{option.label}</span>
                              </label>
                            ))}
                          </div>
                          {errors.aGagne && <p className="text-red-500 text-sm mt-1">{errors.aGagne}</p>}
                        </div>

                        {formData.aGagne === 'oui' && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Quel lot a-t-il gagné ? *
                            </label>
                            <div className="grid md:grid-cols-2 gap-4">
                              {[
                                { value: 'cadeau_surprise', label: 'Cadeau surprise' },
                                { value: 'bon_reduction', label: 'Bon de réduction' },
                                { value: 'produit_yas', label: 'Produit YAS' },
                                { value: 'autre', label: 'Autre lot' }
                              ].map(option => (
                                <label key={option.value} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                                  <input
                                    type="radio"
                                    name="lotGagne"
                                    value={option.value}
                                    checked={formData.lotGagne === option.value}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-blue-900"
                                  />
                                  <span className="ml-3 text-gray-700 font-medium">{option.label}</span>
                                </label>
                              ))}
                            </div>
                            {errors.lotGagne && <p className="text-red-500 text-sm mt-1">{errors.lotGagne}</p>}

                            {formData.lotGagne === 'autre' && (
                              <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Précisez le lot gagné *
                                </label>
                                <input
                                  type="text"
                                  name="autreLot"
                                  value={formData.autreLot}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                  placeholder="Ex: T-shirt, casquette, goodies..."
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle className="text-blue-900" size={24} />
                    <h2 className="text-xl font-bold text-gray-800">Validation</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom de l'hôtesse *</label>
                      <input
                        type="text"
                        name="nomHotesse"
                        value={formData.nomHotesse}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.nomHotesse ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.nomHotesse && <p className="text-red-500 text-sm mt-1">{errors.nomHotesse}</p>}
                    </div>
                  
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Observations</label>
                      <textarea
                        name="observations"
                        value={formData.observations}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Remarques ou observations particulières..."
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  style={{ backgroundColor: '#FFD100', color: '#00377D' }}
                >
                  Envoyer le Formulaire
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderLeftColor: '#00377D' }}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Total Activations</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{totalActivations}</p>
                  </div>
                  <ClipboardList size={32} className="text-blue-900 opacity-20" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderLeftColor: '#FFD100' }}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Nouvelles Puces</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{puceStatus.nouvelle || 0}</p>
                  </div>
                  <Store size={32} className="opacity-20" style={{ color: '#FFD100' }} />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Montant Total</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{totalMontant.toLocaleString()} F</p>
                  </div>
                  <DollarSign size={32} className="text-green-500 opacity-20" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Magasins Actifs</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{Object.keys(magasinStats).length}</p>
                  </div>
                  <Store size={32} className="text-purple-500 opacity-20" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Participants Jeu</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{jeuStats.participation?.oui || 0}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {totalActivations > 0 ? Math.round((jeuStats.participation?.oui || 0) / totalActivations * 100) : 0}% de participation
                    </p>
                  </div>
                  <GamepadIcon size={32} className="text-pink-500 opacity-20" />
                </div>
              </div>
            </div>

           

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Méthodes de Paiement</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={paymentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {paymentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Statut des Puces</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={puceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#00377D" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:col-span-2">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Top 5 Magasins</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topMagasins} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={100} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#00377D" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
 <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Participation au Jeu</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={participationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {participationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Résultats du Jeu</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={gainsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {gainsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Lots Gagnés</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={lotsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#FF6B6B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Historique des Activations</h3>
                <div className="flex space-x-4">
                  <button
                    onClick={exportData}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all"
                    style={{ backgroundColor: '#FFD100', color: '#00377D' }}
                  >
                    <Download size={18} />
                    <span>Exporter</span>
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Filtrer par magasin..."
                    value={filterMagasin}
                    onChange={(e) => setFilterMagasin(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Date/Heure</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Magasin</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Client</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Téléphone</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Montant</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Paiement</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Jeu</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubmissions.length === 0 ? (
                      <tr>
                        <td colSpan="8" className="text-center py-8 text-gray-500">
                          Aucune activation trouvée
                        </td>
                      </tr>
                    ) : (
                      filteredSubmissions.map((sub) => (
                        <tr key={sub.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="text-sm font-medium text-gray-900">
                              {new Date(sub.date).toLocaleDateString()}
                            </div>
                            <div className="text-sm text-gray-500">{sub.heure}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-medium text-gray-900">{sub.nomMagasin}</div>
                            <div className="text-sm text-gray-500">{sub.localite}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-medium text-gray-900">
                              {sub.prenom} {sub.nom}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{sub.telephone}</td>
                          <td className="py-3 px-4">
                            <span className="font-semibold text-green-600">
                              {parseFloat(sub.montant).toLocaleString()} F
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize"
                              style={{
                                backgroundColor: sub.methodePaiement === 'mix' ? '#E6F3FF' : 
                                               sub.methodePaiement === 'especes' ? '#F0F9FF' : 
                                               sub.methodePaiement === 'carte' ? '#F0FFF4' : '#FEFCE8',
                                color: sub.methodePaiement === 'mix' ? '#00377D' : 
                                      sub.methodePaiement === 'especes' ? '#0C4A6E' : 
                                      sub.methodePaiement === 'carte' ? '#166534' : '#854D0E'
                              }}
                            >
                              {sub.methodePaiement === 'mix' ? 'Mix by YAS' : 
                               sub.methodePaiement === 'especes' ? 'Espèces' : 
                               sub.methodePaiement === 'carte' ? 'Carte' : 'Autre'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            {sub.aJoue === 'oui' ? (
                              <div className="flex flex-col space-y-1">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <GamepadIcon size={12} className="mr-1" />
                                  A joué
                                </span>
                                {sub.aGagne === 'oui' && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    <Gift size={12} className="mr-1" />
                                    {sub.lotGagne === 'autre' ? sub.autreLot : 
                                     sub.lotGagne === 'cadeau_surprise' ? 'Cadeau surprise' :
                                     sub.lotGagne === 'bon_reduction' ? 'Bon réduction' : 'Produit YAS'}
                                  </span>
                                )}
                              </div>
                            ) : (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                N'a pas joué
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => deleteSubmission(sub.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                              title="Supprimer"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {filteredSubmissions.length > 0 && (
                <div className="mt-4 text-sm text-gray-500">
                  Affichage de {filteredSubmissions.length} activation(s)
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App; */