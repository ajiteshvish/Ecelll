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

  // Render organizational chart node
  const renderNode = (node: TeamNode) => {
    const getCardSize = (level: number) => {
      switch (level) {
        case 1: return 'w-32 h-20'; // President
        case 2: return 'w-28 h-16'; // VP, Secretary
        case 3: return 'w-24 h-14'; // Treasurer, Executive
        case 4: return 'w-20 h-12'; // Marketing Teams
        case 5: return 'w-18 h-10'; // Roles
        case 6: return 'w-16 h-8';  // Sub-roles
        case 7: return 'w-14 h-6';  // Final roles
        default: return 'w-16 h-8';
      }
    };

    const getTextSize = (level: number) => {
      switch (level) {
        case 1: return 'text-sm font-bold';
        case 2: return 'text-xs font-semibold';
        case 3: return 'text-xs font-medium';
        case 4: return 'text-xs';
        case 5: return 'text-xs';
        case 6: return 'text-xs';
        case 7: return 'text-xs';
        default: return 'text-xs';
      }
    };

    return (
      <div key={node.id} className="flex flex-col items-center">
        {/* Node Card */}
        <div className={`${getCardSize(node.level)} bg-blue-100 border-2 border-blue-300 rounded-lg flex items-center justify-center text-center p-1 hover:bg-blue-200 transition-colors duration-200 group relative`}>
          {node.person ? (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <span className={`${getTextSize(node.level)} text-blue-800 truncate w-full`}>
                {node.person.name}
              </span>
              {node.level <= 3 && (
                <span className="text-xs text-blue-600 truncate w-full">
                  {node.person.role}
                </span>
              )}
              {/* Contact Icons - Show on hover */}
              {(node.person.email || node.person.linkedin) && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500/20 rounded-lg">
                  <div className="flex gap-1">
                    {node.person.email && (
                      <button
                        onClick={() => window.open(`mailto:${node.person.email}`, '_blank')}
                        className="p-1 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
                        title={`Email ${node.person.name}`}
                      >
                        <Mail className="h-2 w-2 text-blue-600" />
                      </button>
                    )}
                    {node.person.linkedin && (
                      <button
                        onClick={() => window.open(node.person.linkedin, '_blank')}
                        className="p-1 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
                        title={`LinkedIn Profile`}
                      >
                        <Linkedin className="h-2 w-2 text-blue-600" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <span className={`${getTextSize(node.level)} text-blue-800`}>
              {node.title}
            </span>
          )}
        </div>

        {/* Children */}
        {node.children && node.children.length > 0 && (
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {node.children.map((child) => (
              <div key={child.id} className="flex flex-col items-center">
                {/* Connecting Line */}
                <div className="w-px h-4 bg-blue-300 mb-2"></div>
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
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 border border-gray-200">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
                Organizational Structure
              </h2>
              <div className="flex justify-center">
                {renderNode(organizationalChart.children[0])}
              </div>
            </div>
          </div>
        </section>

        {/* Team Members List */}
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
              Team Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: 'Sarvesh Kumar', role: 'President & Lead' },
                { name: 'Vraddhi Srivastava', role: 'Vice President' },
                { name: 'Shivam Mudgal', role: 'Secretary' },
                { name: 'Adarsh Patidar', role: 'Treasurer' },
                { name: 'Pooja Singh', role: 'Social Media Head' },
                { name: 'Tanishka Shrivastava', role: 'Graphic Designer' },
                { name: 'Khushi Jain', role: 'Graphic Designer' },
                { name: 'Pushpendra Verma', role: 'Video Editor' },
                { name: 'Ajitesh Vishwakarma', role: 'Technical Team' },
                { name: 'Shourya Gupta', role: 'Technical Team' },
                { name: 'Khushi Soni', role: 'Outreach & PR Team' },
                { name: 'Shivam Kumar', role: 'Outreach & PR Team' },
                { name: 'Ashish Sahu', role: 'Executive' },
                { name: 'Harsh Gupta', role: 'Executive' },
                { name: 'Tanu Agrawal', role: 'Logistic & Event Team' },
                { name: 'Vedant Sah', role: 'Logistic & Event Team' },
                { name: 'Aditi Harinkhere', role: 'Marketing Head' },
                { name: 'Bhagyashree', role: 'Marketing Team' },
                { name: 'Neha Sethiya', role: 'Marketing Team' },
                { name: 'Shreya Shukla', role: 'Content Creator Head' },
                { name: 'Saloni Nema', role: 'Photographer' },
                { name: 'Nishtha Deshmukh', role: 'Operation & Sponsorship Head' },
                { name: 'Devansh Shrivastava', role: 'Operation & Sponsorship Team' }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
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