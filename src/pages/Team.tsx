import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';

interface Person {
  id: string;
  name: string;
  role?: string;
  image?: string;
  about?: string;
  email?: string;
  linkedin?: string;
}

interface TeamNode {
  id: string;
  title: string;
  person?: Person;
  children?: TeamNode[];
  level: number;
}

const Team = () => {
  // Organizational chart structure matching the image
  const organizationalChart: TeamNode = {
    id: 'root',
    title: 'E-CELL LNCTE',
    level: 0,
    children: [
      {
        id: 'president',
        title: 'President & Lead',
        person: { 
          id: 'president', 
          name: 'Sarvesh Kumar', 
          role: 'President & Lead', 
          image: '/team/hero-bg.jpg',
          email: 'sarvesh.kumar@ecell.com',
          linkedin: 'https://linkedin.com/in/sarvesh-kumar'
        },
        level: 1,
        children: [
          {
            id: 'vp',
            title: 'Vice President',
            person: { 
              id: 'vp', 
              name: 'Vraddhi Srivastava', 
              role: 'Vice President',
              email: 'vraddhi.srivastava@ecell.com',
              linkedin: 'https://linkedin.com/in/vraddhi-srivastava'
            },
            level: 2,
            children: [
              {
                id: 'treasurer',
                title: 'Treasurer',
                person: { 
                  id: 'treasurer', 
                  name: 'Adarsh Patidar', 
                  role: 'Treasurer', 
                  image: '/team/IMG-20231109-WA0026 - Adarsh Patidar.jpg',
                  email: 'adarsh.patidar@ecell.com',
                  linkedin: 'https://linkedin.com/in/adarsh-patidar'
                },
                level: 3,
                children: [
                  {
                    id: 'marketing-team',
                    title: 'Marketing Team',
                    person: { 
                      id: 'mkt-head', 
                      name: 'Aditi Harinkhere', 
                      role: 'Marketing Head',
                      email: 'aditi.harinkhere@ecell.com',
                      linkedin: 'https://linkedin.com/in/aditi-harinkhere'
                    },
                    level: 4,
                    children: [
                      {
                        id: 'social-media',
                        title: 'Social Media Team',
                        person: { 
                          id: 'sm-head', 
                          name: 'Pooja Singh', 
                          role: 'Social Media Head', 
                          image: '/team/Screenshot_20250830-224455_Gallery - POOJA_ SINGH 10C.jpg',
                          email: 'pooja.singh@ecell.com',
                          linkedin: 'https://linkedin.com/in/pooja-singh'
                        },
                        level: 5,
                        children: [
                          {
                            id: 'video-editor',
                            title: 'Video Editor',
                            person: { 
                              id: 'sm-3', 
                              name: 'Pushpendra Verma', 
                              role: 'Video Editor', 
                              image: '/team/IMG_20250902_202245 - Satyam Verman.jpg',
                              email: 'pushpendra.verma@ecell.com',
                              linkedin: 'https://linkedin.com/in/pushpendra-verma'
                            },
                            level: 6,
                            children: [
                              {
                                id: 'outreach-pr',
                                title: 'Outreach & PR Team',
                                person: { 
                                  id: 'pr-1', 
                                  name: 'Khushi Soni', 
                                  role: 'Outreach & PR Team', 
                                  image: '/team/IMG-20250709-WA0065 - Khushi Soni.jpg',
                                  email: 'khushi.soni@ecell.com',
                                  linkedin: 'https://linkedin.com/in/khushi-soni'
                                },
                                level: 7
                              },
                              {
                                id: 'logistic-event',
                                title: 'Logistic & Event Team',
                                person: { 
                                  id: 'log-1', 
                                  name: 'Tanu Agrawal', 
                                  role: 'Logistic & Event Team',
                                  email: 'tanu.agrawal@ecell.com',
                                  linkedin: 'https://linkedin.com/in/tanu-agrawal'
                                },
                                level: 7
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'secretary',
            title: 'Secretary',
            person: { 
              id: 'sec', 
              name: 'Shivam Mudgal', 
              role: 'Secretary', 
              image: '/team/20250830_111558_0000 - Shivam Mudgal.png',
              email: 'shivam.mudgal@ecell.com',
              linkedin: 'https://linkedin.com/in/shivam-mudgal'
            },
            level: 2,
            children: [
              {
                id: 'executive-1',
                title: 'Executive',
                person: { 
                  id: 'exec-1', 
                  name: 'Ashish Sahu', 
                  role: 'Executive', 
                  image: '/team/1 - Ashish Sahu.png',
                  email: 'ashish.sahu@ecell.com',
                  linkedin: 'https://linkedin.com/in/ashish-sahu'
                },
                level: 3,
                children: [
                  {
                    id: 'marketing-team-2',
                    title: 'Marketing Team',
                    person: { 
                      id: 'mkt-1', 
                      name: 'Bhagyashree', 
                      role: 'Marketing Team', 
                      image: '/team/Camera-1231719718 - Mishu.jpg',
                      email: 'bhagyashree@ecell.com',
                      linkedin: 'https://linkedin.com/in/bhagyashree'
                    },
                    level: 4,
                    children: [
                      {
                        id: 'graphic-designer-1',
                        title: 'Graphic Designer',
                        person: { 
                          id: 'sm-1', 
                          name: 'Tanishka Shrivastava', 
                          role: 'Graphic Designer', 
                          image: '/team/IMG20250709192629 - Tanishka Shrivastava.jpg',
                          email: 'tanishka.shrivastava@ecell.com',
                          linkedin: 'https://linkedin.com/in/tanishka-shrivastava'
                        },
                        level: 5
                      },
                      {
                        id: 'photographer',
                        title: 'Photographer',
                        person: { 
                          id: 'content-2', 
                          name: 'Saloni Nema', 
                          role: 'Photographer',
                          email: 'saloni.nema@ecell.com',
                          linkedin: 'https://linkedin.com/in/saloni-nema'
                        },
                        level: 5
                      },
                      {
                        id: 'technical-team-1',
                        title: 'Technical Team',
                        person: { 
                          id: 'tech-1', 
                          name: 'Ajitesh Vishwakarma', 
                          role: 'Technical Team', 
                          image: '/team/IMG_20250607_141840.jpg',
                          email: 'ajitesh.vishwakarma@ecell.com',
                          linkedin: 'https://linkedin.com/in/ajitesh-vishwakarma'
                        },
                        level: 5,
                        children: [
                          {
                            id: 'operation-team',
                            title: 'Operation Team',
                            person: { 
                              id: 'ops-head', 
                              name: 'Nishtha Deshmukh', 
                              role: 'Operation & Sponsorship Head', 
                              image: '/team/IMG_20241228_194931_113 - Nishtha Deshmukh.jpg',
                              email: 'nishtha.deshmukh@ecell.com',
                              linkedin: 'https://linkedin.com/in/nishtha-deshmukh'
                            },
                            level: 6,
                            children: [
                              {
                                id: 'logistic-event-2',
                                title: 'Logistic Event',
                                person: { 
                                  id: 'log-2', 
                                  name: 'Vedant Sah', 
                                  role: 'Logistic & Event Team',
                                  email: 'vedant.sah@ecell.com',
                                  linkedin: 'https://linkedin.com/in/vedant-sah'
                                },
                                level: 7
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'executive-2',
                title: 'Executive',
                person: { 
                  id: 'exec-2', 
                  name: 'Harsh Gupta', 
                  role: 'Executive', 
                  image: '/team/IMG20250815164131 - Harsh Gupta.jpg',
                  email: 'harsh.gupta@ecell.com',
                  linkedin: 'https://linkedin.com/in/harsh-gupta'
                },
                level: 3,
                children: [
                  {
                    id: 'marketing-team-3',
                    title: 'Marketing Team',
                    person: { 
                      id: 'mkt-2', 
                      name: 'Neha Sethiya', 
                      role: 'Marketing Team', 
                      image: '/team/20250709_234552 - Neha Sethiya.jpg',
                      email: 'neha.sethiya@ecell.com',
                      linkedin: 'https://linkedin.com/in/neha-sethiya'
                    },
                    level: 4,
                    children: [
                      {
                        id: 'graphic-designer-2',
                        title: 'Graphic Designer',
                        person: { 
                          id: 'sm-2', 
                          name: 'Khushi Jain', 
                          role: 'Graphic Designer', 
                          image: '/team/20250709_215825 - khushi jain.jpg',
                          email: 'khushi.jain@ecell.com',
                          linkedin: 'https://linkedin.com/in/khushi-jain'
                        },
                        level: 5
                      },
                      {
                        id: 'content-creator',
                        title: 'Content Creator',
                        person: { 
                          id: 'content-head', 
                          name: 'Shreya Shukla', 
                          role: 'Content Creator Head', 
                          image: '/team/IMG_20250709_221727 - Shreya.jpg',
                          email: 'shreya.shukla@ecell.com',
                          linkedin: 'https://linkedin.com/in/shreya-shukla'
                        },
                        level: 5
                      },
                      {
                        id: 'technical-team-2',
                        title: 'Technical Team',
                        person: { 
                          id: 'tech-2', 
                          name: 'Shourya Gupta', 
                          role: 'Technical Team', 
                          image: '/team/WhatsApp Image 2025-04-26 at 13.01.33_ee20a3cb - Shourya Gupta.jpg',
                          email: 'shourya.gupta@ecell.com',
                          linkedin: 'https://linkedin.com/in/shourya-gupta'
                        },
                        level: 5,
                        children: [
                          {
                            id: 'ds-team',
                            title: 'D&S Team',
                            person: { 
                              id: 'ops-2', 
                              name: 'Devansh Shrivastava', 
                              role: 'Operation & Sponsorship Team',
                              email: 'devansh.shrivastava@ecell.com',
                              linkedin: 'https://linkedin.com/in/devansh-shrivastava'
                            },
                            level: 6
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  // Render team member card with theme styling
  const renderTeamCard = (person: Person, isLeadership = false) => (
    <Card key={person.id} className="group hover:shadow-xl transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90">
      <CardContent className="p-4 sm:p-6 text-center">
        <div className="relative mb-4">
          <div className={`mx-auto rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 overflow-hidden ${
            isLeadership ? 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28' : 'w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20'
          }`}>
            <img
              src={person.image || '/placeholder.svg'}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Failed to load team image: ${person.image}`);
                e.currentTarget.src = '/placeholder.svg';
              }}
              onLoad={() => {
                console.log(`Successfully loaded team image: ${person.image}`);
              }}
            />
          </div>
          {/* Contact Icons - Show on hover */}
          {(person.email || person.linkedin) && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full">
              <div className="flex gap-2">
                {person.email && (
                  <button
                    onClick={() => window.open(`mailto:${person.email}`, '_blank')}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    title={`Email ${person.name}`}
                  >
                    <Mail className="h-4 w-4 text-white" />
                  </button>
                )}
                {person.linkedin && (
                  <button
                    onClick={() => window.open(person.linkedin, '_blank')}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    title={`LinkedIn Profile`}
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1">{person.name}</h3>
        {person.role && <p className="text-xs sm:text-sm text-muted-foreground">{person.role}</p>}
      </CardContent>
    </Card>
  );

  // Render organizational chart node with theme styling
  const renderNode = (node: TeamNode) => {
    const getCardSize = (level: number) => {
      switch (level) {
        case 1: return 'w-40 h-24 sm:w-48 sm:h-28 lg:w-52 lg:h-32'; // President
        case 2: return 'w-32 h-20 sm:w-36 sm:h-24 lg:w-40 lg:h-28'; // VP, Secretary
        case 3: return 'w-28 h-16 sm:w-32 sm:h-20 lg:w-36 lg:h-24'; // Treasurer, Executive
        case 4: return 'w-24 h-14 sm:w-28 sm:h-16 lg:w-32 lg:h-20'; // Marketing Teams
        case 5: return 'w-20 h-12 sm:w-24 sm:h-14 lg:w-28 lg:h-16'; // Roles
        case 6: return 'w-16 h-10 sm:w-20 sm:h-12 lg:w-24 lg:h-14'; // Sub-roles
        case 7: return 'w-14 h-8 sm:w-16 sm:h-10 lg:w-20 lg:h-12'; // Final roles
        default: return 'w-16 h-8 sm:w-18 sm:h-10 lg:w-20 lg:h-12';
      }
    };

    const getTextSize = (level: number) => {
      switch (level) {
        case 1: return 'text-sm sm:text-base lg:text-lg font-bold';
        case 2: return 'text-xs sm:text-sm lg:text-base font-semibold';
        case 3: return 'text-xs sm:text-sm font-medium';
        case 4: return 'text-xs sm:text-sm';
        case 5: return 'text-xs';
        case 6: return 'text-xs';
        case 7: return 'text-xs';
        default: return 'text-xs';
      }
    };

    return (
      <div key={node.id} className="flex flex-col items-center">
        {/* Node Card */}
        <div className={`${getCardSize(node.level)} bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl flex items-center justify-center text-center p-2 hover:from-primary/20 hover:to-primary/10 hover:border-primary/40 transition-all duration-300 group relative shadow-lg hover:shadow-xl`}>
          {node.person ? (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <span className={`${getTextSize(node.level)} text-foreground truncate w-full`}>
                {node.person.name}
              </span>
              {node.level <= 3 && (
                <span className="text-xs sm:text-sm text-muted-foreground truncate w-full">
                  {node.person.role}
                </span>
              )}
              {/* Contact Icons - Show on hover */}
              {(node.person.email || node.person.linkedin) && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-xl">
                  <div className="flex gap-2">
                    {node.person.email && (
                      <button
                        onClick={() => window.open(`mailto:${node.person.email}`, '_blank')}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        title={`Email ${node.person.name}`}
                      >
                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      </button>
                    )}
                    {node.person.linkedin && (
                      <button
                        onClick={() => window.open(node.person.linkedin, '_blank')}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        title={`LinkedIn Profile`}
                      >
                        <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <span className={`${getTextSize(node.level)} text-foreground`}>
              {node.title}
            </span>
          )}
        </div>

        {/* Children */}
        {node.children && node.children.length > 0 && (
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {node.children.map((child) => (
              <div key={child.id} className="flex flex-col items-center">
                {/* Connecting Line */}
                <div className="w-px h-6 sm:h-8 bg-primary/30 mb-2"></div>
                {renderNode(child)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-14 sm:pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Our Team
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Meet the passionate individuals driving innovation and entrepreneurship at E-CELL LNCTE
            </p>
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 border border-border/50">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
                Organizational Structure
              </h2>
              <div className="flex justify-center overflow-x-auto">
                {renderNode(organizationalChart.children[0])}
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
              Meet Our Team
            </h2>
            
            {/* Leadership Team */}
            <div className="mb-12">
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 text-foreground">Leadership</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {renderTeamCard({ 
                  id: 'president', 
                  name: 'Sarvesh Kumar', 
                  role: 'President & Lead', 
                  image: '/team/hero-bg.jpg',
                  email: 'sarvesh.kumar@ecell.com',
                  linkedin: 'https://linkedin.com/in/sarvesh-kumar'
                }, true)}
                {renderTeamCard({ 
                  id: 'vp', 
                  name: 'Vraddhi Srivastava', 
                  role: 'Vice President',
                  email: 'vraddhi.srivastava@ecell.com',
                  linkedin: 'https://linkedin.com/in/vraddhi-srivastava'
                }, true)}
                {renderTeamCard({ 
                  id: 'sec', 
                  name: 'Shivam Mudgal', 
                  role: 'Secretary', 
                  image: '/team/20250830_111558_0000 - Shivam Mudgal.png',
                  email: 'shivam.mudgal@ecell.com',
                  linkedin: 'https://linkedin.com/in/shivam-mudgal'
                }, true)}
                {renderTeamCard({ 
                  id: 'treasurer', 
                  name: 'Adarsh Patidar', 
                  role: 'Treasurer', 
                  image: '/team/IMG-20231109-WA0026 - Adarsh Patidar.jpg',
                  email: 'adarsh.patidar@ecell.com',
                  linkedin: 'https://linkedin.com/in/adarsh-patidar'
                }, true)}
              </div>
            </div>

            {/* Team Heads */}
            <div className="mb-12">
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 text-foreground">Team Heads</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {renderTeamCard({ 
                  id: 'sm-head', 
                  name: 'Pooja Singh', 
                  role: 'Social Media Head', 
                  image: '/team/Screenshot_20250830-224455_Gallery - POOJA_ SINGH 10C.jpg',
                  email: 'pooja.singh@ecell.com',
                  linkedin: 'https://linkedin.com/in/pooja-singh'
                })}
                {renderTeamCard({ 
                  id: 'mkt-head', 
                  name: 'Aditi Harinkhere', 
                  role: 'Marketing Head',
                  email: 'aditi.harinkhere@ecell.com',
                  linkedin: 'https://linkedin.com/in/aditi-harinkhere'
                })}
                {renderTeamCard({ 
                  id: 'content-head', 
                  name: 'Shreya Shukla', 
                  role: 'Content Creator Head', 
                  image: '/team/IMG_20250709_221727 - Shreya.jpg',
                  email: 'shreya.shukla@ecell.com',
                  linkedin: 'https://linkedin.com/in/shreya-shukla'
                })}
                {renderTeamCard({ 
                  id: 'ops-head', 
                  name: 'Nishtha Deshmukh', 
                  role: 'Operation & Sponsorship Head', 
                  image: '/team/IMG_20241228_194931_113 - Nishtha Deshmukh.jpg',
                  email: 'nishtha.deshmukh@ecell.com',
                  linkedin: 'https://linkedin.com/in/nishtha-deshmukh'
                })}
              </div>
            </div>

            {/* Team Members */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 text-foreground">Team Members</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {renderTeamCard({ 
                  id: 'sm-1', 
                  name: 'Tanishka Shrivastava', 
                  role: 'Graphic Designer', 
                  image: '/team/IMG20250709192629 - Tanishka Shrivastava.jpg',
                  email: 'tanishka.shrivastava@ecell.com',
                  linkedin: 'https://linkedin.com/in/tanishka-shrivastava'
                })}
                {renderTeamCard({ 
                  id: 'sm-2', 
                  name: 'Khushi Jain', 
                  role: 'Graphic Designer', 
                  image: '/team/20250709_215825 - khushi jain.jpg',
                  email: 'khushi.jain@ecell.com',
                  linkedin: 'https://linkedin.com/in/khushi-jain'
                })}
                {renderTeamCard({ 
                  id: 'sm-3', 
                  name: 'Pushpendra Verma', 
                  role: 'Video Editor', 
                  image: '/team/IMG_20250902_202245 - Satyam Verman.jpg',
                  email: 'pushpendra.verma@ecell.com',
                  linkedin: 'https://linkedin.com/in/pushpendra-verma'
                })}
                {renderTeamCard({ 
                  id: 'tech-1', 
                  name: 'Ajitesh Vishwakarma', 
                  role: 'Technical Team', 
                  image: '/team/IMG_20250607_141840.jpg',
                  email: 'ajitesh.vishwakarma@ecell.com',
                  linkedin: 'https://linkedin.com/in/ajitesh-vishwakarma'
                })}
                {renderTeamCard({ 
                  id: 'tech-2', 
                  name: 'Shourya Gupta', 
                  role: 'Technical Team', 
                  image: '/team/WhatsApp Image 2025-04-26 at 13.01.33_ee20a3cb - Shourya Gupta.jpg',
                  email: 'shourya.gupta@ecell.com',
                  linkedin: 'https://linkedin.com/in/shourya-gupta'
                })}
                {renderTeamCard({ 
                  id: 'pr-1', 
                  name: 'Khushi Soni', 
                  role: 'Outreach & PR Team', 
                  image: '/team/IMG-20250709-WA0065 - Khushi Soni.jpg',
                  email: 'khushi.soni@ecell.com',
                  linkedin: 'https://linkedin.com/in/khushi-soni'
                })}
                {renderTeamCard({ 
                  id: 'pr-2', 
                  name: 'Shivam Kumar', 
                  role: 'Outreach & PR Team',
                  email: 'shivam.kumar@ecell.com',
                  linkedin: 'https://linkedin.com/in/shivam-kumar'
                })}
                {renderTeamCard({ 
                  id: 'exec-1', 
                  name: 'Ashish Sahu', 
                  role: 'Executive', 
                  image: '/team/1 - Ashish Sahu.png',
                  email: 'ashish.sahu@ecell.com',
                  linkedin: 'https://linkedin.com/in/ashish-sahu'
                })}
                {renderTeamCard({ 
                  id: 'exec-2', 
                  name: 'Harsh Gupta', 
                  role: 'Executive', 
                  image: '/team/IMG20250815164131 - Harsh Gupta.jpg',
                  email: 'harsh.gupta@ecell.com',
                  linkedin: 'https://linkedin.com/in/harsh-gupta'
                })}
                {renderTeamCard({ 
                  id: 'log-1', 
                  name: 'Tanu Agrawal', 
                  role: 'Logistic & Event Team',
                  email: 'tanu.agrawal@ecell.com',
                  linkedin: 'https://linkedin.com/in/tanu-agrawal'
                })}
                {renderTeamCard({ 
                  id: 'log-2', 
                  name: 'Vedant Sah', 
                  role: 'Logistic & Event Team',
                  email: 'vedant.sah@ecell.com',
                  linkedin: 'https://linkedin.com/in/vedant-sah'
                })}
                {renderTeamCard({ 
                  id: 'mkt-1', 
                  name: 'Bhagyashree', 
                  role: 'Marketing Team', 
                  image: '/team/Camera-1231719718 - Mishu.jpg',
                  email: 'bhagyashree@ecell.com',
                  linkedin: 'https://linkedin.com/in/bhagyashree'
                })}
                {renderTeamCard({ 
                  id: 'mkt-2', 
                  name: 'Neha Sethiya', 
                  role: 'Marketing Team', 
                  image: '/team/20250709_234552 - Neha Sethiya.jpg',
                  email: 'neha.sethiya@ecell.com',
                  linkedin: 'https://linkedin.com/in/neha-sethiya'
                })}
                {renderTeamCard({ 
                  id: 'content-1', 
                  name: 'Shaikh Asad UI Hasan', 
                  role: 'Videographer',
                  email: 'asad.hasan@ecell.com',
                  linkedin: 'https://linkedin.com/in/asad-hasan'
                })}
                {renderTeamCard({ 
                  id: 'content-2', 
                  name: 'Saloni Nema', 
                  role: 'Photographer',
                  email: 'saloni.nema@ecell.com',
                  linkedin: 'https://linkedin.com/in/saloni-nema'
                })}
                {renderTeamCard({ 
                  id: 'ops-1', 
                  name: 'Rewansh Vaidya', 
                  role: 'Operation & Sponsorship Team',
                  email: 'rewansh.vaidya@ecell.com',
                  linkedin: 'https://linkedin.com/in/rewansh-vaidya'
                })}
                {renderTeamCard({ 
                  id: 'ops-2', 
                  name: 'Devansh Shrivastava', 
                  role: 'Operation & Sponsorship Team',
                  email: 'devansh.shrivastava@ecell.com',
                  linkedin: 'https://linkedin.com/in/devansh-shrivastava'
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Join Team Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              We're always looking for passionate individuals to join our entrepreneurship community
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base">
              Get In Touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;