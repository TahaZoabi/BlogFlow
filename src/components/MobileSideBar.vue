<script setup lang="ts">
import { SideBar } from '@/components/ui/side-bar'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const SHEET_SIDES = ['left'] as const
</script>

<template>
  <!-- Mobile Navigation -->
  <section class="md:hidden mt-4">
    <Sheet v-for="side in SHEET_SIDES" :key="side">
      <SheetTrigger as-child>
        <Button variant="outline"> SideBar </Button>
      </SheetTrigger>
      <SheetContent :side="side" class="md:hidden">
        <!-- DialogTitle -->
        <DialogTitle></DialogTitle>
        <!-- DialogDescription -->
        <DialogDescription></DialogDescription>
        <SideBar class="w-full" />
      </SheetContent>
    </Sheet>
  </section>
</template>
