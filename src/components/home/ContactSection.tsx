
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    toast.success("Votre message a été envoyé avec succès !");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Contactez-nous</h2>
            <p className="text-gray-600 mb-8">
              N'hésitez pas à nous contacter pour toute question ou information complémentaire. 
              Notre équipe est à votre disposition pour vous répondre dans les meilleurs délais.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-mlomp-green text-white p-3 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Adresse</h3>
                  <p className="text-gray-600">Mairie de Mlomp, Commune de Mlomp, Bignona, Sénégal</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-mlomp-green text-white p-3 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Téléphone</h3>
                  <p className="text-gray-600">+221 XX XXX XX XX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-mlomp-green text-white p-3 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">contact@mlomp.sn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-mlomp-green text-white p-3 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Horaires d'ouverture</h3>
                  <p className="text-gray-600">Lundi - Vendredi: 8h00 - 16h00</p>
                  <p className="text-gray-600">Samedi: 9h00 - 12h00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-semibold">Suivez-nous sur les réseaux sociaux</p>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.42,17.12V14.25h-2.9v2.87h2.9Zm-9.27,0h2.9V14.25h-2.9v2.87Zm4.71,0h2.9V14.25h-2.9v2.87ZM24,7.95v8.1A4.05,4.05,0,0,1,19.95,20H4.05A4.05,4.05,0,0,1,0,15.95V7.95A4.05,4.05,0,0,1,4.05,3.9h15.9A4.05,4.05,0,0,1,24,7.95Z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.4,4.7a4.16,4.16,0,0,0-.55,2.07,4.09,4.09,0,0,0,1.82,3.41,4.05,4.05,0,0,1-1.86-.51v.05a4.1,4.1,0,0,0,3.3,4,3.93,3.93,0,0,1-1.1.17,4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                  </svg>
                </a>
                <a href="#" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85,0,3.2,0,3.58-.07,4.85-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07-3.2,0-3.58,0-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85,0-3.2,0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Votre email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Votre message"
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full btn-primary">
                Envoyer le message
              </Button>
              <p className="text-sm text-gray-500 text-center">
                * Champs obligatoires
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
