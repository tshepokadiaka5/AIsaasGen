import React, { useState } from 'react';
import './AnimatedQRPayment.css'; // Import any necessary CSS

const AnimatedQRPayment = () => {
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [engagementMetrics, setEngagementMetrics] = useState(0);

    const handlePayment = () => {
        // Simulate payment processing
        setPaymentStatus('Processing...');

        // Simulate payment success after 2 seconds
        setTimeout(() => {
            setPaymentStatus('Payment Successful!');
            trackEngagement();
        }, 2000);

        // Show flying hearts
        showHearts();
    };

    const trackEngagement = () => {
        setEngagementMetrics(engagementMetrics + 1);
    };

    const showHearts = () => {
        const heartContainer = document.createElement('div');
        heartContainer.className = 'heart-container';
        document.body.appendChild(heartContainer);

        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('span');
            heart.className = 'heart';
            heart.innerText = '❤️';
            heartContainer.appendChild(heart);

            // Animate heart
            heart.animate([
                { transform: 'translateY(0)' },
                { transform: 'translateY(-100px)', opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-in',
                fill: 'forwards'
            });

            // Remove heart after the animation
            setTimeout(() => heart.remove(), 1000);
        }
    };

    return (
        <div className="animated-qr-payment">
            <button onClick={handlePayment}>Pay with QR Code</button>
            {paymentStatus && <p>{paymentStatus}</p>}
            <p>Engagement Metrics: {engagementMetrics}</p>
        </div>
    );
};

export default AnimatedQRPayment;