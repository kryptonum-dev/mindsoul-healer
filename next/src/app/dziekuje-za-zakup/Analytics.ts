'use client';

import { useEffect } from 'react';
import type { AnalyticsTypes } from './page.types';

export default function Analytics({ ec_product, ec_product_uuid, ec_amount, ttclid }: AnalyticsTypes) {
  useEffect(() => {
    if (!ec_product || !ec_product_uuid || !ec_amount) return;
    fetch('/api/server-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        meta_event_name: 'Purchase',
        tiktok_event_name: 'CompletePayment',
        content_id: ec_product_uuid,
        content_name: ec_product,
        content_price: ec_amount,
        ttclid: ttclid,
      }),
    });
    window.history.replaceState(null, '', window.location.pathname);
  }, [ec_product, ec_product_uuid, ec_amount, ttclid]);

  return null;
}
