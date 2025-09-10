@@ .. @@
-import React, { useEffect } from 'react';
+import React from 'react';
 import { PresaleHero } from '../components/presale/PresaleHero';
 import { TrustBadges } from '../components/presale/TrustBadges';
 import { ProgressStrip } from '../components/presale/ProgressStrip';
@@ .. @@
 import { LegalRisk } from '../components/presale/LegalRisk';
 
 export const Presale: React.FC = () => {
-  useEffect(() => {
-    // Create the Coinremitter widget script
-    const crPresaleWidget = document.createElement('script');
-    crPresaleWidget.id = 'coinremitter-presale-widget';
-    crPresaleWidget.type = 'text/javascript';
-    crPresaleWidget.src = 'https://cdn.coinremitter.com/widget/presale/MFN5nM0p09/checkout.js';
-    crPresaleWidget.charset = 'UTF-8';
-    crPresaleWidget.setAttribute('crossorigin', '*');
-
-    // Append to the container
-    const container = document.getElementById('coinremitter-widget-container');
-    if (container) {
-      container.appendChild(crPresaleWidget);
-    }
-
-    // Cleanup on unmount
-    return () => {
-      if (container && crPresaleWidget.parentNode) {
-        container.removeChild(crPresaleWidget);
-      }
-    };
-  }, []);
-
   return (
     <div className="min-h-screen section-with-top-shade">
       <div className="container mx-auto px-4 py-20">
@@ .. @@
         {/* Progress Strip */}
         <ProgressStrip />
 
-        {/* Coinremitter Widget */}
-        <div id="coinremitter-widget-container" className="my-8"></div>
+        {/* Widget Placeholder - Coinremitter widget temporarily disabled */}
+        <div className="my-8 max-w-4xl mx-auto">
+          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold text-center">
+            <h3 className="text-2xl font-bold text-playmatez-white mb-4">Purchase $PLYM Tokens</h3>
+            <p className="text-playmatez-white/80 mb-6">
+              The token purchase widget will be available here. Use the "How to Buy" section below for detailed instructions.
+            </p>
+            <div className="inline-flex items-center px-6 py-3 bg-playmatez-gold/20 border border-playmatez-gold rounded-full text-playmatez-gold font-medium">
+              Widget Coming Soon
+            </div>
+          </div>
+        </div>
 
         {/* Benefits */}
         <PresaleBenefits />