import { getInfoBlog } from '@/apis/Res';

export default async function strapi() {
  const data = await getInfoBlog();

  return (
    <section className='container_all max-w-[1200px] w-[90%] m-auto'>
      <h1 className='text-center mt-[50px]'>ESTE CONTENIDO VIENE DE STRAPI</h1>

      <h1 className='text-[50px]'>{data[0]?.Titulo}</h1>
      <p className='text-[14px] w-[60%]'>{data[0]?.description}</p>
      <p className='mt-[20px] text-[40px] font-[700]'>{data[0]?.platformNames[0]}</p>
      <img className='w-full' src={data[0]?.cover} alt='imagen' />
    </section>
  );
}
