import { Card } from './ui/card';
import { Calendar, User, ArrowRight, Eye, Clock } from 'lucide-react';

export const OurBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Entrepreneurship",
      author: "E-CELL Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      views: "1.2k",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      excerpt: "Exploring how artificial intelligence is revolutionizing the startup ecosystem and creating new opportunities for entrepreneurs to innovate and scale their businesses.",
      category: "Technology",
      featured: true
    },
    {
      id: 2,
      title: "Building a Successful Startup Team",
      author: "John Doe",
      date: "March 10, 2024",
      readTime: "7 min read",
      views: "890",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      excerpt: "Learn the essential strategies for assembling and managing a high-performing startup team that can drive your venture towards success.",
      category: "Team Building",
      featured: false
    },
    {
      id: 3,
      title: "Funding Your Startup: A Complete Guide",
      author: "Jane Smith",
      date: "March 5, 2024",
      readTime: "10 min read",
      views: "2.1k",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      excerpt: "Comprehensive guide covering all funding options available to startups, from bootstrapping to venture capital, with practical tips for each stage.",
      category: "Finance",
      featured: true
    },
    {
      id: 4,
      title: "Digital Marketing for Startups",
      author: "Mike Johnson",
      date: "February 28, 2024",
      readTime: "6 min read",
      views: "750",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      excerpt: "Discover cost-effective digital marketing strategies that can help startups build brand awareness and acquire customers on a limited budget.",
      category: "Marketing",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Business Models",
      author: "Sarah Wilson",
      date: "February 20, 2024",
      readTime: "8 min read",
      views: "1.5k",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      excerpt: "How modern entrepreneurs are building sustainable and environmentally conscious business models that create value for all stakeholders.",
      category: "Sustainability",
      featured: true
    },
    {
      id: 6,
      title: "Innovation in Education Technology",
      author: "Alex Chen",
      date: "February 15, 2024",
      readTime: "9 min read",
      views: "980",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      excerpt: "Exploring how edtech startups are transforming the learning experience and creating new opportunities in the education sector.",
      category: "Education",
      featured: false
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
              OUR BLOGS
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Insights, trends, and stories from the entrepreneurship world
          </p>
        </div>

        {/* Mobile-Optimized Horizontal Scrollable Layout */}
        <div className="scroll-container">
          <div className="flex overflow-x-auto scrollbar-hide horizontal-scroll gap-4 sm:gap-6 pb-4 snap-x snap-mandatory px-4 sm:px-0">
            {blogs.map((blog) => (
              <div key={blog.id} className="horizontal-card w-72 sm:w-80 md:w-96 flex-shrink-0">
                <Card className="group bg-card border border-border/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Image Section */}
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.error(`Failed to load blog image: ${blog.image}`);
                        (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Category and Featured Badges */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start">
                      <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                        {blog.category}
                      </span>
                      {blog.featured && (
                        <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full animate-pulse">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Blog Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-3 sm:p-4 md:p-6">
                    {/* Author and Date */}
                    <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-primary flex-shrink-0" />
                        <span className="truncate">{blog.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-primary flex-shrink-0" />
                        <span className="truncate">{blog.date}</span>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Stats and Read More */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-primary flex-shrink-0" />
                          <span className="truncate">{blog.readTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-primary flex-shrink-0" />
                          <span className="truncate">{blog.views}</span>
                        </div>
                      </div>
                      
                      <button className="btn-glass group/btn flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold">
                        <span>Read</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Mobile-friendly scroll indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
            {blogs.map((_, index) => (
              <div key={index} className="scroll-indicator w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/30 rounded-full"></div>
            ))}
          </div>
          
          {/* Mobile scroll hint */}
          <div className="text-center mt-3 sm:hidden">
            <p className="mobile-scroll-hint">← Swipe to explore more blogs →</p>
          </div>
        </div>
      </div>
    </section>
  );
};