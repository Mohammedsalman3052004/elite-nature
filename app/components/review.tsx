"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Star, Quote, Trash2, Shield, ShieldOff } from "lucide-react"
import Toast from "./toast-notification"

interface Review {
  id: number
  name: string
  rating: number
  review: string
  date: string
  service?: string
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    review:
      "Absolutely amazing experience! The deep tissue massage was exactly what I needed. The therapists are highly skilled and the ambiance is so relaxing. Will definitely be coming back!",
    date: "2024-01-15",
    service: "Deep Tissue Massage",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    review:
      "Best spa experience I've ever had. The Swedish massage was incredibly relaxing and the staff was so professional. The facilities are top-notch and very clean.",
    date: "2024-01-12",
    service: "Swedish Massage",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    review:
      "Great service and beautiful location. The hot stone massage was wonderful and really helped with my stress. The only minor issue was the wait time, but it was worth it.",
    date: "2024-01-10",
    service: "Hot Stone Massage",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    review:
      "Exceptional service from start to finish. The couples massage package was perfect for our anniversary. The therapists were amazing and the atmosphere was so romantic.",
    date: "2024-01-08",
    service: "Couples Massage",
  },
  {
    id: 5,
    name: "Lisa Wang",
    rating: 5,
    review:
      "I've been to many spas, but this one stands out. The aromatherapy massage was heavenly and the staff made me feel so welcome. Highly recommend to anyone looking for relaxation.",
    date: "2024-01-05",
    service: "Aromatherapy Massage",
  },
  {
    id: 6,
    name: "James Wilson",
    rating: 4,
    review:
      "Very professional and clean facility. The sports massage really helped with my muscle tension. Great value for money and I'll definitely be returning for regular sessions.",
    date: "2024-01-03",
    service: "Sports Massage",
  },
]

const STORAGE_KEY = "spa_reviews"
const ADMIN_KEY = "spa_admin_2024" // Change this to your preferred admin key

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    review: "",
  })
  const [hoveredStar, setHoveredStar] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [adminClickCount, setAdminClickCount] = useState(0)
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success" as "success" | "error" | "info",
  })

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const loadReviews = () => {
      try {
        const storedReviews = localStorage.getItem(STORAGE_KEY)
        if (storedReviews) {
          const parsedReviews = JSON.parse(storedReviews)
          // Merge stored reviews with initial reviews, avoiding duplicates
          const mergedReviews = [...parsedReviews]

          // Add initial reviews that don't exist in stored reviews
          initialReviews.forEach((initialReview) => {
            if (!parsedReviews.find((review: Review) => review.id === initialReview.id)) {
              mergedReviews.push(initialReview)
            }
          })

          setReviews(mergedReviews)
        } else {
          setReviews(initialReviews)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initialReviews))
        }
      } catch (error) {
        console.error("Error loading reviews from localStorage:", error)
        setReviews(initialReviews)
      }
    }

    loadReviews()
  }, [])

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    if (reviews.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
      } catch (error) {
        console.error("Error saving reviews to localStorage:", error)
      }
    }
  }, [reviews])

  // Auto-scroll functionality
  useEffect(() => {
    if (reviews.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const visibleSlides = getVisibleSlides()
        const maxSlides = Math.ceil(reviews.length / visibleSlides)
        return (prev + 1) % maxSlides
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [reviews.length])

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 640) return 2
      return 1
    }
    return 1
  }

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ isVisible: true, message, type })
  }

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }))
  }

  // Admin mode activation (triple-click on header)
  const handleHeaderClick = () => {
    setAdminClickCount((prev) => prev + 1)
    setTimeout(() => setAdminClickCount(0), 2000) // Reset after 2 seconds

    if (adminClickCount === 2) {
      // Triple click detected
      const enteredKey = prompt("Enter admin key:")
      if (enteredKey === ADMIN_KEY) {
        setIsAdminMode(true)
        showToast("Admin mode activated", "info")
      } else if (enteredKey) {
        showToast("Invalid admin key", "error")
      }
      setAdminClickCount(0)
    }
  }

  const toggleAdminMode = () => {
    if (isAdminMode) {
      setIsAdminMode(false)
      showToast("Admin mode deactivated", "info")
    } else {
      const enteredKey = prompt("Enter admin key:")
      if (enteredKey === ADMIN_KEY) {
        setIsAdminMode(true)
        showToast("Admin mode activated", "info")
      } else if (enteredKey) {
        showToast("Invalid admin key", "error")
      }
    }
  }

  const handleDeleteReview = (reviewId: number, reviewerName: string) => {
    if (window.confirm(`Are you sure you want to delete the review by ${reviewerName}?`)) {
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId))
      showToast(`Review by ${reviewerName} has been deleted`, "info")
    }
  }

  const handleStarClick = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }))
  }

  const handleStarHover = (rating: number) => {
    setHoveredStar(rating)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newReview.name.trim()) {
      showToast("Please enter your name", "error")
      return
    }

    if (!newReview.review.trim()) {
      showToast("Please write a review", "error")
      return
    }

    if (newReview.rating === 0) {
      showToast("Please select a rating", "error")
      return
    }

    setIsSubmitting(true)

    // Simulate submission delay for better UX
    setTimeout(() => {
      const reviewToAdd: Review = {
        id: Date.now(), // Simple ID generation using timestamp
        name: newReview.name.trim(),
        rating: newReview.rating,
        review: newReview.review.trim(),
        date: new Date().toISOString().split("T")[0],
        service: "Recent Visit",
      }

      // Add new review to the beginning of the array
      setReviews((prevReviews) => [reviewToAdd, ...prevReviews])

      setIsSubmitting(false)
      setNewReview({ name: "", rating: 0, review: "" })
      setHoveredStar(0)

      showToast("Thank you! Your review has been published successfully.", "success")
    }, 1000)
  }

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starNumber = index + 1
      const isActive = interactive ? starNumber <= (hoveredStar || newReview.rating) : starNumber <= rating

      return (
        <Star
          key={index}
          className={`w-5 h-5 ${interactive ? "cursor-pointer" : ""} ${
            isActive ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          } transition-colors duration-200`}
          onClick={interactive ? () => handleStarClick(starNumber) : undefined}
          onMouseEnter={interactive ? () => handleStarHover(starNumber) : undefined}
          onMouseLeave={interactive ? () => setHoveredStar(0) : undefined}
        />
      )
    })
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const visibleSlides = getVisibleSlides()
  const totalSlides = Math.ceil(reviews.length / visibleSlides)

  if (reviews.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loading Reviews...</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onClose={hideToast} />

      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4 cursor-pointer select-none"
              onClick={handleHeaderClick}
              title="Triple-click for admin access"
            >
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of clients trust us for their wellness journey. Read genuine reviews from our
              satisfied customers.
            </p>
            <div className="mt-4 flex items-center justify-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                {reviews.length} Total Reviews
              </span>
              {isAdminMode && (
                <button
                  onClick={toggleAdminMode}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
                >
                  <ShieldOff className="w-4 h-4 mr-1" />
                  Exit Admin
                </button>
              )}
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="mb-16 relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                      {reviews.slice(slideIndex * visibleSlides, (slideIndex + 1) * visibleSlides).map((review) => (
                        <div key={review.id} className="relative">
                          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 h-full border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                            {/* Admin Delete Button */}
                            {isAdminMode && (
                              <button
                                onClick={() => handleDeleteReview(review.id, review.name)}
                                className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors z-10"
                                title="Delete this review"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}

                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
                              <Quote className="w-8 h-8 text-amber-200" />
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed text-sm lg:text-base line-clamp-4">
                              "{review.review}"
                            </p>

                            <div className="border-t border-gray-100 pt-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-gray-900 text-sm lg:text-base">{review.name}</h4>
                                  {review.service && (
                                    <p className="text-xs lg:text-sm text-amber-600 font-medium">{review.service}</p>
                                  )}
                                </div>
                                <span className="text-xs lg:text-sm text-gray-500">
                                  {new Date(review.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentSlide === index ? "bg-amber-600 scale-110" : "bg-amber-300 hover:bg-amber-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Admin Mode Indicator */}
          {isAdminMode && (
            <div className="mb-8 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Admin Mode Active - You can delete reviews
              </div>
            </div>
          )}

          {/* Write a Review Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-12 border border-amber-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
                We'd love to hear about your experience at our spa. Your feedback helps us continue providing
                exceptional service to all our clients.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Rating *</label>
                  <div className="flex items-center space-x-1 py-3">
                    {renderStars(newReview.rating, true)}
                    <span className="ml-3 text-sm text-gray-600">
                      {newReview.rating > 0
                        ? `${newReview.rating} star${newReview.rating > 1 ? "s" : ""}`
                        : "Select rating"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="review" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Review *
                </label>
                <textarea
                  id="review"
                  rows={5}
                  value={newReview.review}
                  onChange={(e) => setNewReview((prev) => ({ ...prev, review: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none text-sm lg:text-base"
                  placeholder="Tell us about your experience at our spa..."
                  maxLength={500}
                  required
                />
                <div className="text-right mt-1">
                  <span className="text-sm text-gray-500">{newReview.review.length}/500</span>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm lg:text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Review"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <style jsx>{`
          .line-clamp-4 {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>
    </>
  )
}
