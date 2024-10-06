'use client'
import { Produto } from "@/core";
import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react";

export interface ProdutoItemProps{
    produto: Produto
}


export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props;

    return (
      <Link
        href={`/produto/${produto.id}`}
        className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px] "
      >
        <div className="h-48 w-full relative">
          <Image
            src={produto.imagem}
            alt="Imagem do Produto"
            className="object-contain"
            fill
          />
        </div>
        <div className="flex-1 flex flex-col p-5 gap-3 border-t  border-white/10">
                <span className="text-lg font-semibold">{props.produto.nome}</span>
                <span className="text-sm border-b border-dashed self-start">
                    {produto.especificacoes.destaque}
                </span>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">de {props.produto.precoBase}</span>
                    <span className="text-xl font-semibold text-emerald-400">por {props.produto.precoPromocional}</span>
                </div>
                
                <button className="flex justify-center bg-violet-700 hover:border-2 border-emerald-500 rounded-full h-8 gap-2 items-center
                "
                
                onClick={(e:any) => {
                  e.preventfault()
                  console.log('Adicionar ao Carrinho')
                  
                }}
                >

                  <IconShoppingCartPlus size={20}/>

                    <span>Adicionar</span>
                </button>
        </div>

      </Link>
    );
    
}