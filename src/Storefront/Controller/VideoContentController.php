<?php declare(strict_types=1);

namespace Frosh\CmsVideoModals\Storefront\Controller;

use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @RouteScope(scopes={"storefront"})
 */
class VideoContentController extends StorefrontController
{
    /**
     * @Route("/videocontent/load", name="frontend.videocontent.load", options={"seo"="false"}, methods={"GET"}, defaults={"XmlHttpRequest"=true})
     */
    public function load(Request $request, SalesChannelContext $context)
    {
        $url = $request->query->get('url', '');
        return $this->render('@FroshCmsVideoModals/storefront/videocontent/load.html.twig',
            [
                'url' => $url
            ]);
    }
}
