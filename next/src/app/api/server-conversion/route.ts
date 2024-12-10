import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { hash } from '@/utils/hash';

const TIKTOK_PIXEL_ID = process.env.TIKTOK_PIXEL_ID;
const META_PIXEL_ID = process.env.META_PIXEL_ID;
const current_timestamp = Math.floor(Date.now() / 1000);

export async function POST(request: Request) {
  const client_ip_address = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
  const client_user_agent = request.headers.get('user-agent');

  const fbc = cookies().get('_fbc')?.value;
  const fbp = cookies().get('_fbp')?.value;
  const ttp = cookies().get('ttp')?.value;

  const {
    meta_event_name,
    tiktok_event_name,
    email,
    content_id,
    content_name,
    content_price,
    event_source_url,
    ttclid,
  } = await request.json();

  console.log(fbc);
  console.log(fbp);
  console.log(ttp);
  console.log(content_id);
  console.log(content_name);
  console.log(content_price);
  console.log(ttclid);

  const referer = event_source_url || request.headers.get('referer');

  console.log(
    meta_event_name,
    tiktok_event_name,
    email,
    content_id,
    content_name,
    content_price,
    event_source_url,
    ttclid
  );

  try {
    // if (meta_event_name) {
    //   await fetch(
    //     `https://graph.facebook.com/v20.0/${META_PIXEL_ID}/events?access_token=${process.env.META_CONVERSION_API}`,
    //     {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({
    //         data: [
    //           {
    //             event_name: meta_event_name,
    //             event_time: current_timestamp,
    //             action_source: 'website',
    //             event_source_url: referer,
    //             user_data: {
    //               client_ip_address: client_ip_address,
    //               client_user_agent: client_user_agent,
    //               ...(email && { em: await hash(email) }),
    //               ...(fbc && { fbc: fbc }),
    //               ...(fbp && { fbc: fbp }),
    //             },
    //             custom_data: {
    //               contents: [{ id: content_id, quantity: 1 }],
    //               content_name: content_name,
    //               content_type: 'product',
    //               ...(content_price && {
    //                 value: content_price,
    //               }),
    //               currency: 'PLN',
    //             },
    //           },
    //         ],
    //       }),
    //     }
    //   );
    // }
    // if (tiktok_event_name) {
    //   await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Token': process.env.TIKTOK_EVENTS_API!,
    //     },
    //     body: JSON.stringify({
    //       event_source: 'web',
    //       event_source_id: TIKTOK_PIXEL_ID,
    //       data: [
    //         {
    //           event: tiktok_event_name,
    //           event_time: current_timestamp,
    //           user: {
    //             ...(ttclid && { ttclid: ttclid }),
    //             ...(ttp && { ttp: ttp }),
    //             ...(email && { email: await hash(email) }),
    //             ip: client_ip_address,
    //             user_agent: client_user_agent,
    //           },
    //           page: {
    //             url: referer,
    //           },
    //           properties: {
    //             contents: [
    //               {
    //                 content_id: content_id,
    //                 content_name: content_name,
    //                 content_type: 'product',
    //               },
    //             ],
    //             ...(content_price && {
    //               value: content_price,
    //             }),
    //             currency: 'PLN',
    //           },
    //         },
    //       ],
    //     }),
    //   });
    // }
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}
