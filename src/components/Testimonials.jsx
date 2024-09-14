import React from 'react';
import p1 from './../assets/p1.jpg'
import p2 from './../assets/p2.jpg'
const testimonials = [
  {
    text: "أحببت تنوع المنتجات والاهتمام بالتفاصيل. شكراً لكم على الجودة والخدمة الممتازة.",    name: "Caroline Goodman",
    role: "Client",
    image: p1
  },
  {
    text: "لقد أحببت الجودة والخدمة الممتازة التي تلقيتها. الطعم لا يضاهى، وسوف أوصي بجميع أصدقائي بتجربة منتجاتكم. شكراً لكم على هذه التجربة الرائعة!",    name: "يوسف بن عبد الله",
    role: "Client",
    image: p2
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">تعليقات و آراء</h2>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-md px-6 py-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-200">
              <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-orange-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
