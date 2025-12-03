
import { useParams, Navigate } from 'react-router-dom';
import ServiceLayout from '@/components/services/ServiceLayout';
import { servicesData } from '@/data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Vérifier si le service existe
  if (!serviceId || !servicesData[serviceId]) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesData[serviceId];

  return (
    <ServiceLayout service={service} />
  );
};

export default ServiceDetail;
