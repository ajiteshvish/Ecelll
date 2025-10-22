import { Card } from './ui/card';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

export const PastEvents = () => {
  const pastEvents = [
    {
      id: 1,
      title: "E-Summit 2023",
      date: "March 2023",
      location: "LNCTE Main Campus",
      participants: "500+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      description: "Our flagship annual event featuring keynote speakers, panel discussions, startup exhibitions, and networking sessions. Industry leaders shared insights on emerging trends and future opportunities.",
      achievements: ["₹10 Lakh funding awarded", "50+ Startups showcased", "20+ Industry speakers"]
    },
    {
      id: 2,
      title: "Tech Innovation Challenge",
      date: "September 2023",
      location: "Innovation Hub",
      participants: "250+",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      description: "A 48-hour hackathon focused on developing technological solutions for social impact. Teams worked on projects addressing healthcare, education, and sustainability challenges.",
      achievements: ["25 innovative solutions", "₹5 Lakh prize money", "Industry partnerships formed"]
    },
    {
      id: 3,
      title: "Women Entrepreneur Summit",
      date: "August 2023",
      location: "Conference Center",
      participants: "300+",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
      description: "Empowering women entrepreneurs through mentorship sessions, success stories, and networking opportunities. Featured successful women business leaders sharing their entrepreneurial journeys.",
      achievements: ["100+ Women entrepreneurs", "30+ Mentorship connections", "New startup incubation"]
    },
    {
      id: 4,
      title: "Startup Bootcamp",
      date: "June 2023",
      location: "LNCTE Auditorium",
      participants: "180+",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      description: "Intensive 3-day bootcamp covering all aspects of startup development from ideation to scaling. Participants received hands-on training and direct feedback from industry experts.",
      achievements: ["15 startups launched", "₹2 Lakh seed funding", "Ongoing mentorship program"]
    },
    {
      id: 5,
      title: "Industry Connect 2023",
      date: "April 2023",
      location: "Main Campus",
      participants: "400+",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=400&fit=crop",
      description: "Bridge building event connecting students with industry professionals, creating opportunities for internships, collaborations, and career guidance in the entrepreneurship ecosystem.",
      achievements: ["200+ Industry connections", "50+ Internship offers", "Multiple job placements"]
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl rounded-full animate-pulse"></div>
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text-hero bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              PAST EVENTS
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Celebrating our successful events and the impact we've created in the entrepreneurship community
          </p>
        </div>

        {/* Mobile-Optimized Horizontal Scrollable Layout */}
        <div className="scroll-container">
          <div className="flex overflow-x-auto scrollbar-hide horizontal-scroll gap-4 sm:gap-6 pb-4 snap-x snap-mandatory px-4 sm:px-0">
            {pastEvents.map((event) => (
              <div key={event.id} className="horizontal-card w-72 sm:w-80 md:w-96 flex-shrink-0">
                <Card className="group bg-card border border-border/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Image Section */}
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.error(`Failed to load event image: ${event.image}`);
                        (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Event Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-3 sm:p-4 md:p-6">
                    {/* Event Details */}
                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                        <span className="truncate">{event.date}</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                        <span className="truncate">{event.participants} participants</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <div className="flex items-center text-xs sm:text-sm font-medium text-primary">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        <span>Key Achievements</span>
                      </div>
                      <ul className="space-y-1">
                        {event.achievements.slice(0, 2).map((achievement, index) => (
                          <li key={index} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                            <span className="line-clamp-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Mobile-friendly scroll indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
            {pastEvents.map((_, index) => (
              <div key={index} className="scroll-indicator w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/30 rounded-full"></div>
            ))}
          </div>
          
          {/* Mobile scroll hint */}
          <div className="text-center mt-3 sm:hidden">
            <p className="mobile-scroll-hint">← Swipe to explore more events →</p>
          </div>
        </div>
      </div>
    </section>
  );
};