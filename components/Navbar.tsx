// import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { ScrollPositionEffectProps, useScrollPosition } from 'hooks/useScrollPosition';
import { NavItems, SingleNavItem } from 'types';
import { media } from 'utils/media';
import Button from './Button';
import Container from './Container';
// import Drawer from './Drawer';
import Logo from './Logo';

// const ColorSwitcher = dynamic(() => import('../components/ColorSwitcher'), { ssr: false });

type NavbarProps = { items: NavItems };
type ScrollingDirections = 'up' | 'down' | 'none';
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: NavbarProps) {
  const router = useRouter();
  // const { toggle } = Drawer.useDrawer();
  const [scrollingDirection, setScrollingDirection] = useState<ScrollingDirections>('none');
  const [menuOpen, setMenuOpen] = useState(false);

  let lastScrollY = useRef(0);
  const lastRoute = useRef('');
  const stepSize = useRef(50);

  useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50);

  // Use useEffect to close the menu when screen size increases
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath;
    const hasRouteChanged = routerPath !== lastRoute.current;

    if (hasRouteChanged) {
      lastRoute.current = routerPath;
      setScrollingDirection('none');
      return;
    }

    const currentScrollY = currPos.y;
    const isScrollingUp = currentScrollY > lastScrollY.current;
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    const isInNonCollapsibleArea = lastScrollY.current > -50;

    if (isInNonCollapsibleArea) {
      setScrollingDirection('none');
      lastScrollY.current = currentScrollY;
      return;
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY;
      return;
    }

    setScrollingDirection(isScrollingUp ? 'up' : 'down');
    lastScrollY.current = currentScrollY;
  }

  const isNavbarHidden = scrollingDirection === 'down';
  const isTransparent = scrollingDirection === 'none';
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <NavbarContainer hidden={isNavbarHidden} transparent={isTransparent}>
        <Content>
          <NextLink href="/" passHref>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </NextLink>
          <NavItemList>
            {items.map((singleItem) => (
              <NavItem key={singleItem.href} {...singleItem} />
            ))}
          </NavItemList>
          {/* <ColorSwitcherContainer>
            <ColorSwitcher />
          </ColorSwitcherContainer> */}
          <HamburgerMenuWrapper>
            <HamburgerIcon
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              open={menuOpen}
            />
          </HamburgerMenuWrapper>
        </Content>
      </NavbarContainer>
      <OverlayWrapper open={menuOpen}>
        <MenuWrapper open={menuOpen}>
          <MenuContent>
            {items.map((singleItem) => (
              <NavItem key={singleItem.href} {...singleItem} onClick={closeMenu} />
            ))}
          </MenuContent>
        </MenuWrapper>
      </OverlayWrapper>
    </>
  );
}

function NavItem({ href, title, outlined, isButton, onClick }: SingleNavItem) {
  const { setIsModalOpened } = useNewsletterModalContext();

  function showNewsletterModal() {
    setIsModalOpened(true);
  }
  if (isButton) {
    return (
      <CustomButton onClick={onClick}>
        <NextLink href={href}>
          <a  href={href} style={{ textDecoration: 'none', color: 'inherit' }}>{title}</a>
        </NextLink>
      </CustomButton>
    );
  }

  if (outlined) {
    return <CustomButton onClick={showNewsletterModal}>{title}</CustomButton>;
  }

  return (
    <NavItemWrapper outlined={outlined} onClick={onClick}>
      <NextLink href={href} passHref>
        <a href={href}>{title}</a>
      </NextLink>
    </NavItemWrapper>
  );
}

const CustomButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;

const NavItemList = styled.div`
  display: flex;
  list-style: none;

  ${media('<desktop')} {
    display: none;
  }
`;

const HamburgerMenuWrapper = styled.div`
  ${media('>=desktop')} {
    display: none;
  }
`;

const LogoWrapper = styled.a`
  display: flex;
  margin-right: auto;
  text-decoration: none;

  color: rgb(var(--logoColor));
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: ${(p) => (p.outlined ? 'rgb(var(--primary))' : 'transparent')};
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;
  list-style: none; /* Remove bullet points */

  &:hover {
    background-color: ${(p) => (p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent')};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p) => (p.outlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--text), 0.75)')};
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
const OverlayWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.open ? 'block' : 'none')};
  z-index: 999; /* Ensure the overlay is on top of everything */
`;

const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// const ColorSwitcherContainer = styled.div`
//   width: 4rem;
//   margin: 0 1rem;
// `;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  background-color: rgba(255, 255, 255, 0.95); /* Adjust background color as needed */
  padding: 1rem; /* Add padding to the menu content */
  border-radius: 10px; /* Add border radius */
  backdrop-filter: blur(5px); /* Apply blur effect */
  gap: 10px;
`;

const MenuWrapper = styled.div<{ open: boolean }>`
  position: absolute; /* Use absolute positioning for the menu */
  top: ${(props) => (props.open ? '8rem' : '-100%')}; /* Adjust the top position */
  right: 0;
  width: 100%; /* Full width */
  max-height: calc(100% - 8rem); /* Limit the menu height to 100% - 8rem (adjust as needed) */
  overflow-y: auto; /* Add scrollbars if content exceeds the menu height */
  background-color: rgba(255, 255, 255, 0.95); /* Adjust background color as needed */
  transition: top 0.3s ease; /* Add a transition for smooth slide-in/slide-out */
  border-bottom-left-radius: 10px; /* Add border radius */
  border-bottom-right-radius: 10px;
  backdrop-filter: blur(5px); /* Apply blur effect */
`;


// Define the HamburgerIcon component
const HamburgerIcon = styled.div<{ open: boolean }>`
  width: 30px;
  height: 2px;
  background-color: #333;
  position: relative;
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &::before,
  &::after {
    content: '';
    width: 30px;
    height: 2px;
    background-color: #333;
    position: absolute;
    transition: top 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }

  ${(props) =>
    props.open &&
    `
      background-color: transparent;

      &::before {
        top: 0;
        transform: rotate(45deg);
      }

      &::after {
        top: 0;
        transform: rotate(-45deg);
      }
    `}
`;
