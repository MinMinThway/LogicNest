import React from 'react';
import { Service, TeamMember, Project } from './types';
import { WebDevIcon, MobileDevIcon, UIDesignIcon, CloudIcon, MissionIcon, EmailIcon, PhoneIcon, MenuIcon, CloseIcon, Logo, LineIcon } from './components/IconComponents';

// --- DATA ---
const services: Service[] = [
  {
    icon: <WebDevIcon />,
    title: 'Web App Development',
    description: 'We build responsive, high-performance web applications using modern frameworks like React, Vue, and Node.js.'
  },
  {
    icon: <MobileDevIcon />,
    title: 'Mobile Solutions',
    description: 'Crafting intuitive and beautiful native mobile apps for both iOS and Android to elevate your business presence.'
  },
  {
    icon: <UIDesignIcon />,
    title: 'UI/UX Design',
    description: 'User-centric design and prototyping to create engaging experiences that are both beautiful and easy to use.'
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud & DevOps',
    description: 'Automating deployment and scaling your infrastructure on AWS, Google Cloud, and Azure for maximum efficiency.'
  }
];

const teamMembers: TeamMember[] = [
  { name: 'Sandar Oo', role: 'Lead DBA, Software Developer', bio: 'A seasoned Lead DBA and Software Developer with 8 years of experience, specializing in database architecture, performance tuning, and robust application development.', imageUrl: '/images/s.jpeg' },
  { name: 'Min Min Thway', role: 'Full-Stack Developer', bio: 'A versatile Full-Stack Developer with 5+ years of experience in eCommerce and web apps. He has led over 15 projects, delivering measurable gains in speed, UX, and conversion rates.', imageUrl: '/images/minminthway.png' },
  { name: 'Min Thway Khaing', role: 'Software Engineer', bio: 'A dedicated Software Engineer with a portfolio of over 10 successfully completed projects, focusing on clean code and performance.', imageUrl: '/images/minthwaykhaingv1.jpg' },
  { name: 'Thaw Zin Oo', role: 'Software Developer', bio: 'A skilled Software Developer with 5 years of experience, Thaw Zin has successfully delivered over 10 projects by focusing on robust architecture and efficient code.', imageUrl: '/images/thawzin.jpeg' },
  { name: 'Hmwe Pwint Khaing', role: 'Sales & Marketing Professional', bio: 'With 10+ years driving growth and innovation in Software Solutions, FMCG, Automotive Industry, and Wi-Fi Solutions, helping businesses succeed.', imageUrl: '/images/hwme.jpeg' },
  { name: 'Yie Mon Aung', role: 'Sales & Marketing Professional', bio: 'With 10+ years driving growth and innovation in software solutions and the automotive industry, helping businesses succeed.', imageUrl: '/images/y.jpeg' },
];

const projects: Project[] = [
  { 
    title: 'Shwe App', 
    description: 'A multi-service app for agent management, visa handling, translator services, and health consulting.',
    imageUrl: '/images/shwe.webp',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Java']
  },
  {
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce solution with a custom CMS and integrated payment gateways for a growing retail brand.',
    imageUrl: '/images/E-commerce-Platform.png',
    tags: ['Vue.js', 'Stripe', 'AWS S3', 'Express','Magento','Wordpress']
  },
  {
    title: 'Health & Wellness App',
    description: 'A cross-platform mobile app designed to help users track their fitness goals and connect with trainers.',
    imageUrl: '/images/health.png',
    tags: ['React Native', 'Firebase', 'Figma']
  }
];


// --- REUSABLE COMPONENTS (defined outside App to prevent re-creation) ---
interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-text-secondary leading-relaxed">{subtitle}</p>
      <div className="mt-12">
        {children}
      </div>
    </div>
  </section>
);


interface ServiceCardProps {
  service: Service;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="bg-base-200/80 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-center items-center mb-6">{service.icon}</div>
    <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
    <p className="mt-2 text-text-secondary leading-relaxed">{service.description}</p>
  </div>
);

interface TeamMemberCardProps {
  member: TeamMember;
}
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
  <div className="bg-base-200/80 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 flex flex-col h-full p-8 items-center">
    <img className="w-32 h-32 object-cover rounded-full shadow-lg mb-6 flex-shrink-0" src={member.imageUrl} alt={member.name} />
    <div className="flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-text-primary">{member.name}</h3>
      <p className="text-brand-primary mt-1 font-medium">{member.role}</p>
      <p className="text-text-secondary text-sm mt-4 text-left flex-grow leading-relaxed">{member.bio}</p>
    </div>
  </div>
);


interface ProjectCardProps {
  project: Project;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-base-200/80 rounded-lg shadow-lg overflow-hidden group">
    <div className="overflow-hidden">
        <img className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" src={project.imageUrl} alt={project.title} />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
      <p className="mt-2 text-text-secondary leading-relaxed">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="bg-base-300 text-brand-secondary text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-base-100/95 min-h-screen backdrop-blur-sm">
      {/* Header */}
      <header className="bg-base-200/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => handleNavClick('services')} className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">Services</button>
                <button onClick={() => handleNavClick('vision-mission')} className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">Vision & Mission</button>
                <button onClick={() => handleNavClick('team')} className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">Our Team</button>
                <button onClick={() => handleNavClick('portfolio')} className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">Portfolio</button>
                <button onClick={() => handleNavClick('contact')} className="bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-secondary transition-colors">Contact Us</button>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-text-secondary hover:text-text-primary focus:outline-none" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
        
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => handleNavClick('services')} className="w-full text-left block text-text-secondary hover:text-text-primary hover:bg-base-300 px-3 py-2 rounded-md text-base font-medium">Services</button>
              <button onClick={() => handleNavClick('vision-mission')} className="w-full text-left block text-text-secondary hover:text-text-primary hover:bg-base-300 px-3 py-2 rounded-md text-base font-medium">Vision & Mission</button>
              <button onClick={() => handleNavClick('team')} className="w-full text-left block text-text-secondary hover:text-text-primary hover:bg-base-300 px-3 py-2 rounded-md text-base font-medium">Our Team</button>
              <button onClick={() => handleNavClick('portfolio')} className="w-full text-left block text-text-secondary hover:text-text-primary hover:bg-base-300 px-3 py-2 rounded-md text-base font-medium">Portfolio</button>
              <button onClick={() => handleNavClick('contact')} className="w-full text-left block bg-brand-primary text-white px-3 py-2 rounded-md text-base font-medium hover:bg-brand-secondary transition-colors mt-2">Contact Us</button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative text-center py-24 sm:py-32 lg:py-48 px-4 animate-fade-in-up" style={{opacity: 0}}>
           <div className="absolute inset-0 bg-grid-base-300/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
           <div className="relative z-10">
              <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
                Crafting Digital Excellence
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary sm:text-xl leading-relaxed">
                We are a dedicated team of 15 professionals transforming ideas into powerful software solutions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => handleNavClick('portfolio')} className="w-full sm:w-auto bg-brand-primary text-white px-8 py-3 rounded-md text-base font-medium hover:bg-brand-secondary transition-colors shadow-lg">
                  View Our Work
                </button>
                 <button onClick={() => handleNavClick('contact')} className="w-full sm:w-auto bg-base-300 text-text-primary px-8 py-3 rounded-md text-base font-medium hover:bg-base-200 transition-colors shadow-lg">
                  Get In Touch
                </button>
              </div>
            </div>
        </div>


        {/* Services Section */}
        <Section id="services" title="Our Services" subtitle="We deliver end-to-end software solutions tailored to your needs.">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {services.map(service => <ServiceCard key={service.title} service={service} />)}
          </div>
        </Section>
        
        {/* Vision & Mission Section */}
        <Section id="vision-mission" title="Our Vision & Mission" subtitle="The driving force behind our commitment to excellence.">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-base-200/80 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <UIDesignIcon />
              <h3 className="text-2xl font-bold text-text-primary mt-6">Our Vision</h3>
              <p className="mt-4 text-text-secondary leading-relaxed">
                To be a leading force in digital innovation, crafting bespoke software solutions that empower our clients to achieve market leadership and create lasting value.
              </p>
            </div>
            <div className="bg-base-200/80 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <MissionIcon />
              <h3 className="text-2xl font-bold text-text-primary mt-6">Our Mission</h3>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Our mission is to translate complex business challenges into elegant, high-performance software, committed to a collaborative process that delivers products that are powerful and a joy to use.
              </p>
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section id="team" title="Meet Our Expert Team" subtitle="A close-knit team of 6 passionate developers, designers, and project managers.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => <TeamMemberCard key={member.name} member={member} />)}
          </div>
        </Section>

        {/* Portfolio Section */}
        <Section id="portfolio" title="Our Recent Work" subtitle="Check out some of the innovative solutions we've delivered.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => <ProjectCard key={project.title} project={project} />)}
          </div>
        </Section>

        {/* Contact Section */}
        <section id="contact" className="bg-base-200/80 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl font-extrabold text-text-primary">Ready to build something amazing?</h2>
                 <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                   Let's start a conversation about your project. Reach out to us and we'll get back to you within 24 hours.
                 </p>
                 <div className="mt-10 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    <a href="mailto:hmwepwintkhaing@gmail.com" className="flex items-center text-lg text-text-primary hover:text-brand-primary transition-colors group">
                        <EmailIcon />
                        <span className="group-hover:underline">hmwepwintkhaing@gmail.com</span>
                    </a>
                    <a href="tel:+959422523358" className="flex items-center text-lg text-text-primary hover:text-brand-primary transition-colors group">
                        <PhoneIcon />
                        <span className="group-hover:underline">+959 422 523358</span>
                    </a>
                    <a href="tel:+959768270013" className="flex items-center text-lg text-text-primary hover:text-brand-primary transition-colors group">
                        <PhoneIcon />
                        <span className="group-hover:underline">+959 768 270 013</span>
                    </a>
                    <a href="https://line.me/ti/p/w_EuVkCIAF" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-text-primary hover:text-brand-primary transition-colors group">
                        <LineIcon />
                        <span className="group-hover:underline">Add us on Line</span>
                    </a>
                 </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-base-300/80">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} LogicNest – Hub for Smart Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;